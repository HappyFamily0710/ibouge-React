import { BaseProvider } from '@ethersproject/providers'
import { chainIDToExplorer } from '@rainbow-me/kit-utils'
import React, { useMemo } from 'react'
import { Box, BoxProps } from '../Box'
import { CopyAddressButton } from '../CopyAddressButton'
import { Text } from '../Text'
import { CloseIcon, ExplorerIcon } from './Icons'
import { SelectedWalletWithBalance } from './SelectedWalletWithBalance'
import { MenuStyles } from './WalletDropdown.css'

export interface WalletDropdownProps extends BoxProps {
  copyAddress?: boolean | ((props: { address: string }) => JSX.Element)
  /**
   * Ethereum or ENS address
   */
  address: string
  /**
   * Ethereum address
   */
  accountAddress: string
  /**
   * Blockchain network ID
   */
  chainId: number
  /**
   * RPC Provider
   */
  provider: BaseProvider
  /**
   * Disconnect from current provider
   */
  disconnect: () => void
  /**
   * Visible state
   */
  isExpanded: boolean
}

export const WalletDropdown = ({
  copyAddress: CopyAddressComponent,
  address,
  accountAddress,
  chainId,
  provider,
  disconnect,
  isExpanded,
  ...props
}: WalletDropdownProps) => {
  const explorerName = useMemo(() => {
    if (chainId) {
      const name = chainIDToExplorer(chainId).name
      return `${name[0].toUpperCase()}${name.slice(1)}`
    }
    return 'Etherscan'
  }, [chainId])

  return (
    <Box
      as="ul"
      background="blackLight"
      position="absolute"
      margin="0"
      borderRadius="16"
      padding="12"
      className={MenuStyles}
      display={isExpanded ? 'block' : 'none'}
      {...props}
    >
      <SelectedWalletWithBalance {...{ chainId, provider, accountAddress }} />
      <Box
        as="li"
        fontSize="14"
        marginBottom="16"
        fontWeight="heavy"
        display="flex"
        width="full"
        justifyContent="space-between"
        alignItems="center"
      >
        {CopyAddressComponent === true || CopyAddressComponent === undefined ? (
          <CopyAddressButton {...{ address }} />
        ) : (
          typeof CopyAddressComponent !== 'boolean' && <CopyAddressComponent {...{ address }} />
        )}
      </Box>
      <Box
        as="li"
        color="sky90"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="full"
        marginBottom="16"
      >
        <Text as="h3" color="sky90" size="14" weight="bold">
          {explorerName}
        </Text>
        <Box width="20" height="20" display="flex" justifyContent="center" alignItems="center">
          <ExplorerIcon />
        </Box>
      </Box>
      <Box as="li">
        <Box
          as="button"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="full"
          color="red"
          onClick={() => disconnect()}
        >
          <Text color="red" size="14" weight="bold">
            Disconnect
          </Text>
          <Box width="20" height="20" display="flex" justifyContent="center" alignItems="center">
            <CloseIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

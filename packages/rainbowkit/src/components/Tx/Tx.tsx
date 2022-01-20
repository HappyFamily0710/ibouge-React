import { BaseProvider } from '@ethersproject/providers';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import type {
  TransactionStatus,
  TransactionWithStatus,
} from '../../hooks/useTxHistory';
import { chainIDToExplorer } from '../../utils/convert';
import { guessTitle } from '../../utils/guessTitle';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import {
  FailIcon,
  LoadingIcon,
  SuccessIcon,
  ViewTransactionIcon,
} from './icons';

export type TxProps = {
  /**
   * Transaction status
   */
  status?: TransactionStatus;
  /**
   * Transaction title
   */
  title?: string;
  /**
   * Blockchain network ID of a transaction
   */
  chainId?: number;
  /**
   * Blockchain Explorer URL
   */
  explorerUrl?: string;
  /**
   * RPC Provider
   */
  provider?: BaseProvider;
  classNames?: Partial<{
    container: string;
    icon: string;
  }>;
} & Pick<
  TransactionWithStatus,
  'status' | 'to' | 'value' | 'from' | 'data' | 'hash'
>;

const StatusIcon = ({ status }: { status: TransactionStatus }) => {
  switch (status) {
    case 'fail':
      return <FailIcon />;
    case 'pending':
      return <LoadingIcon />;
    case 'success':
      return <SuccessIcon />;
  }
};

export const Tx = ({
  chainId,
  classNames,
  data,
  from,
  status,
  title: initialTitle,
  to,
  value,
  ...props
}: TxProps) => {
  const [title, setTitle] = useState(initialTitle || '');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (props.hash) {
      if (props.explorerUrl) setLink(`${props.explorerUrl}/tx/${props.hash}`);
      else if (chainId) {
        setLink(`${chainIDToExplorer(chainId).url}/tx/${props.hash}`);
      }

      if (!initialTitle) {
        const guessedTitle = guessTitle({ chainId, data, from, to, value });
        if (guessedTitle) setTitle(guessedTitle);
      }
    }
  }, [props.hash, props.explorerUrl, chainId]);

  const statusColor = useMemo(() => {
    switch (status) {
      case 'fail':
        return 'error';
      case 'pending':
        return 'menuTextSecondary';
      case 'success':
        return 'menuTextAction';
    }
  }, [status]);

  return (
    <Box
      className={clsx(classNames?.container)}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom="24"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Box as="span" color={status === 'fail' ? 'error' : 'menuTextAction'}>
          <StatusIcon status={status} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="14"
          marginRight="4"
        >
          <Text as="span" color="menuText" size="16" weight="bold">
            {title || 'Contract call'}
          </Text>
          <Box
            as="span"
            color={statusColor}
            fontFamily="body"
            fontSize="14"
            fontWeight="bold"
            marginTop="4"
          >
            {status[0].toUpperCase() + status.slice(1)}
          </Box>
        </Box>
      </Box>
      <Box as="a" color="menuTextAction" href={link} title="View on explorer">
        <ViewTransactionIcon />
      </Box>
    </Box>
  );
};

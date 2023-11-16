import * as theme from "@/styles/theme";
import ENSAvatar from "../shared/ENSAvatar";
import { css } from "@emotion/css";
import { HStack, VStack } from "../Layout/Stack";
import HumanAddress from "../shared/HumanAddress";
import { useEnsName } from "wagmi";
import { formatNumber } from "@/lib/tokenUtils";

export function DelegateProfileImage({ address, votingPower }) {
  // TODO: Load token params from config
  const formattedNumber = formatNumber(votingPower, "optimism", 4);

  const { data } = useEnsName({
    chainId: 1,
    address,
  });

  return (
    <HStack gap="4">
      <div
        className={css`
          position: relative;
          aspect-ratio: 1/1;
        `}
      >
        <ENSAvatar
          className={css`
            width: 44px;
            height: 44px;
            border-radius: 100%;
          `}
          ensName={data}
        />
      </div>

      <VStack>
        <div
          className={css`
            font-size: ${theme.fontSize.base};
            font-weight: ${theme.fontWeight.semibold};
          `}
        >
          <HumanAddress address={address} />
        </div>
        <div
          className={css`
            font-size: ${theme.fontSize.xs};
            font-weight: ${theme.fontWeight.semibold};
            color: #4f4f4f;
          `}
        >
          {/** // TODO: Make currency symbol dynamic */}
          {formattedNumber} OP
        </div>
      </VStack>
    </HStack>
  );
}

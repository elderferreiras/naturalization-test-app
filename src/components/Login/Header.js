import { Flex, Image, useTheme } from "@aws-amplify/ui-react";
import citizInterviewLogo from "../../assets/images/citizinterview.png"

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="CitizInterview"
        src={citizInterviewLogo}
        padding={tokens.space.medium}
      />
    </Flex>
  );
}

import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:info@remedium.ai"
                            target="_blank"
                        >
                            <h3>For general inquiries to Remedium.ai.</h3>
                            <p>
                                If you have any questions regarding Remedium.ai and the services we provide, please get in contact.
                            </p>
                            <h5>info@remedium.ai</h5>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:onboarding@remedium.ai"
                            target="_blank"
                        >
                            <h3>For onboarding to SBI</h3>
                            <p>
                                If you want to onboard to or have any questions regarding the SBI Dashboard, please let us know. 
                            </p>
                            <h5>onboarding@remedium.ai</h5>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                {/* <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>United Kingdom</p>
                        <p>Office: Everton Road 45, 43256 Manchester, England</p>
                    </TextBox>
                </FadeIn> */}
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};

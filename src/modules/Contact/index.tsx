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
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 123 233 421"
                            target="_blank"
                        >
                            <h3>+44 123 456 789</h3>
                            <p>
                                Call us in case of any urgent questions. 
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:service@remedium.ai"
                            target="_blank"
                        >
                            <h3>service@remedium.ai</h3>
                            <p>
                                Also you can write us an email if you have any
                                questions.
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>United Kingdom</p>
                        <p>Office: Winnder Street 321, 11111 Manchester, England</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};

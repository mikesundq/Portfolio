import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { 
    ContactPageWrapper,
    ContactFormWrap,
    ContactFormGroup,
    ContactInput,
    ContactInputText,
    SubmitButton,

} from "../elements"

const contact = () => {
    return (
<Layout>
<SEO title="CV" description="Mike CV" />
            <ContactPageWrapper>
                <ContactFormWrap>
                    <h3>get in touch</h3>
                    <form action="https://formspree.io/f/xknpoqbz" method="POST">
                        <ContactFormGroup>
                            <ContactInput
                                type="text"
                                name="name"
                                placeholder="name"
                                //className="form-control"
                            />
                            <ContactInput
                                type="email"
                                placeholder="email"
                                name="email"
                                //className="form-control"
                            />
                            <ContactInputText
                                name="message"
                                rows="5"
                                placeholder="message"
                                //className="form-control"
                            ></ContactInputText>
                        </ContactFormGroup>
                        <SubmitButton type="submit">
                            submit here
                        </SubmitButton>
                    </form>
                </ContactFormWrap>
            </ContactPageWrapper>
        </Layout>
    )
}
export default contact
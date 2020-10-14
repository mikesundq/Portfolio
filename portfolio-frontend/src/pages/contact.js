import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { 
    ContactPageWrapper,
    ContactFormWrap,
    ContactFormGroup,
    ContactInput,
    ContactInputText,

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
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="form-control"
                            />
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="form-control"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="message"
                                className="form-control"
                            ></textarea>
                        </ContactFormGroup>
                        <button type="submit" className="submit-btn btn">
                            submit here
            </button>
                    </form>
                </ContactFormWrap>
            </ContactPageWrapper>
        </Layout>
    )
}
export default contact
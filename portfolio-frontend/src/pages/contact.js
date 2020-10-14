import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { 
    ContactPageWrapper,
} from "../elements"

const contact = () => {
    return (
<Layout>
<SEO title="CV" description="Mike CV" />
            <ContactPageWrapper>
                <article className="contact-form">
                    <h3>get in touch</h3>
                    <form action="https://formspree.io/f/xknpoqbz" method="POST">
                        <div className="form-group">
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
                        </div>
                        <button type="submit" className="submit-btn btn">
                            submit here
            </button>
                    </form>
                </article>
            </ContactPageWrapper>
        </Layout>
    )
}
export default contact
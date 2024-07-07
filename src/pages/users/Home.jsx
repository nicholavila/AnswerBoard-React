// import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Container } from "react-bootstrap"
// import { Helmet } from "react-helmet";
// import Http from '../../services/Http'

import {
  Banner,
  TryForFree,
  IntroList,
  CategoryList
} from "../../components/users/Home"
import "./Home.css"

const Home = () => {
  const { token } = useSelector(state => state.user)
  // const [metadata, setMetadata] = useState({
  //   author: "",
  //   description: "",
  //   keywords: "",
  //   othername: "",
  //   othercontent: "",
  //   slug: "",
  //   title: "",
  //   viewport: ""
  // });

  // useEffect(() => {
  //   let curUrl = document.location.pathname.slice(1);
  //   if (curUrl === "")
  //     curUrl = "home";
  //   let params = {
  //     url: curUrl
  //   };

  //   Http.post(`/admin/seos/url`, params).then(res => {
  //     let data = res.data;
  //     if (data.success && data.data) {
  //       setMetadata({
  //         ...metadata,
  //         author: data.data.author,
  //         description: data.data.description,
  //         keywords: data.data.keywords,
  //         othername: data.data.othername,
  //         othercontent: data.data.othercontent,
  //         slug: data.data.slug,
  //         title: data.data.title,
  //         viewport: data.data.viewport,
  //       })
  //       document.title = data.data.title;
  //     } else {
  //       setMetadata({
  //         ...metadata,
  //         author: "AnswerSheet",
  //         description: "AnswerSheet has HSC study guides, practice questions and exams to help you achieve a band 6 in your HSC subjects. We have syllabus summaries, practice HSC exam-style questions, and sample answers to show you how to write band 6 responses.",
  //         keywords: "HSC notes, HSC study guides, syllabus summaries, dot point notes, HSC summaries, HSC English, HSC Physics, HSC maths, HSC Chemistry, HSC Biology",
  //         othername: "",
  //         othercontent: "",
  //         slug: "",
  //         title: "AnswerSheet - HSC made easy",
  //         viewport: "width=device-width,initial-scale=1",
  //       })
  //     }
  //   }).catch(err => {
  //     setMetadata({
  //       ...metadata,
  //       author: "AnswerSheet",
  //       description: "AnswerSheet has HSC study guides, practice questions and exams to help you achieve a band 6 in your HSC subjects. We have syllabus summaries, practice HSC exam-style questions, and sample answers to show you how to write band 6 responses.",
  //       keywords: "HSC notes, HSC study guides, syllabus summaries, dot point notes, HSC summaries, HSC English, HSC Physics, HSC maths, HSC Chemistry, HSC Biology",
  //       othername: "",
  //       othercontent: "",
  //       slug: "",
  //       title: "AnswerSheet - HSC made easy",
  //       viewport: "width=device-width,initial-scale=1",
  //     })
  //   });
  // }, []);

  return (
    <>
      {/* <Helmet>
        <title>{metadata.title}</title>
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name={metadata.othername} content={metadata.othercontent} />
      </Helmet> */}
      <div className="home-container">
        <Banner
          title="High quality HSC study guides"
          content="Everything you need to get a Band 6"
        />
        {!token ? (
          <TryForFree
            title="Try us for free"
            content="Sign up for a free account and start studying"
          />

        ) : null}
        <div className="category-container">
          <Container>
            <IntroList title="Use AnswerSheet - Get a band 6" />
            <CategoryList />
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home

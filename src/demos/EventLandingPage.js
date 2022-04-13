import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/TwoColSingleFeatureWithStats.js";
import Blog from "components/blogs/GridWithFeaturedPost";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import PhotoSlider from "components/testimonials/TwoColumnWithOnlyImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Testimonial />
    <Blog />
    <PhotoSlider />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);

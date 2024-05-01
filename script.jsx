function Topic() {
   
  return (
    <div id="container ,style={{margint:20px,fontsize:50px}}">
      <section>
        <h1 style ={{margin:"50px",
            fontSize:20px}}>Topics covered</h1>
        <p>
          The following is a list of all the topics we cover in the MDN learning
          area.
        </p>
      </section>
      <section>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">
          Getting started with the web
        </a>
        <p>
          Getting started with the web Provides a practical introduction to web
          development for complete beginners.
        </p>
      </section>
      <section>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
          HTML — Structuring the web HTML
        </a>
        <p>
        HTML is the language that we use to structure the different parts of our
          content and define what their meaning or purpose is. This topic
          teaches HTML in detail.
        </p>
      </section>
      <section>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
          CSS — Styling the web
        </a>
        <p>
          CSS is the language that we use to control our web content's style and
          layout, as well as adding behavior like animation. This topic provides
          comprehensive coverage of CSS.
        </p>
      </section>
    </div>
  );
}
ReactDOM.render(<Topic />, document.querySelector("#root"));

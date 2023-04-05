import "./responsiveWOMediaQuery.module.scss";

export default function ResponsiveWOMediaQuery() {
  return (
    <div>
      hi
      <div id="container">
        <div className="image-container">
          <img alt="responsive" />
        </div>
        <div className="content-container">
          <div className="tags-container">
            <div>job</div>
            <div>career</div>
            <div>business</div>
            <div>know how</div>
          </div>
          <h2 id="title"> How to get a job? </h2>
          <p id="excerpt">
            Learn from the best CEO&apos;s how to show yourself in the best
            possible way
          </p>
          <a id="link" href="https://github.com/avaniklsjoshi">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

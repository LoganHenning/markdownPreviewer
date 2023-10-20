marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const defaultText = `# This is a markdown header
## This is a sub-header

[This is a link](freecodecamp.org)

\`This is in-line code: 1 + 1 = 2\`

\`\`\`
This is a code block
var a = 3
var b = 2
var c = a + b //c returns 5
\`\`\`

Here is a list:
- list item

> This is a block quote

This is **bolded text**

![React Logo w/ Text](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png )

`;

function App() {
  const [text, setText] = React.useState(defaultText);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <h3 calssName="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

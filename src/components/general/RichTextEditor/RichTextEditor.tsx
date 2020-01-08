import React, { useMemo, Fragment } from "react";
import { createEditor, Node, Operation } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";
import renderElement from "./renderElement";
import renderMark from "./marks";
import MarkButton from "./components/MarkButton";

const defaultValue: Node[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "This is editable ",
        marks: []
      },
      {
        text: "rich",
        marks: [{ type: "bold" }]
      },
      {
        text: " text, ",
        marks: []
      },
      {
        text: "much",
        marks: [{ type: "italic" }]
      },
      {
        text: " better than a ",
        marks: []
      },
      {
        text: "<textarea>",
        marks: [{ type: "code" }]
      },
      {
        text: "!",
        marks: []
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
        marks: []
      },
      {
        text: "bold",
        marks: [{ type: "bold" }]
      },
      {
        text:
          ", or add a semantically rendered block quote in the middle of the page, like this:",
        marks: []
      }
    ]
  },
  {
    type: "block-quote",
    children: [
      {
        text: "A wise quote.",
        marks: []
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Try it out for yourself!",
        marks: []
      }
    ]
  }
];

type RichTextEditorProps = {
  value?: Node[];
  readOnly?: boolean;
  onChange?: ((children: Node[], operations: Operation[]) => void) | undefined;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  readOnly,
  onChange
}) => {
  const editor = useMemo(() => {
    if (readOnly) {
      return withReact(createEditor());
    }

    return withHistory(withReact(createEditor()));
  }, [readOnly]);

  return (
    <Slate
      editor={editor}
      defaultValue={value || defaultValue}
      onChange={value => console.log(JSON.stringify(value))}
    >
      <Fragment>
        {!readOnly &&
          <Fragment>
            <MarkButton format="bold">format_bold</MarkButton>
            <MarkButton format="italic">format_italic</MarkButton>
            <MarkButton format="underline">format_underlined</MarkButton>
            <MarkButton format="code">code</MarkButton>
          </Fragment>
        }

        <Editable
          readOnly={readOnly}
          renderElement={renderElement}
          renderMark={renderMark}
        />
      </Fragment>
    </Slate>
  );
};

export default RichTextEditor;

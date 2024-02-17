import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Typography, Link as MuiLink, Box, Alert } from "@mui/material";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography variant="body1" sx={{lineHeight:2}}>{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <Typography sx={{ my: 4 }} variant="h3">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <Typography sx={{ my: 4 }} variant="h4">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <Typography sx={{ my: 4 }} variant="h5">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <Typography sx={{ my: 4 }} variant="h6">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <Typography sx={{ my: 4 }} variant="subtitle2">
        {children}
      </Typography>
    ),
    [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (_, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (_, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      return (
        <img src={file.url} alt={file.title} style={{ maxWidth: "100%" }} />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <MuiLink
          sx={{ color: "inherit" }}
          href={uri}
          target="_blank"
          rel="noopener">
          {children}
        </MuiLink>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const { slug } = node.data.target.fields;
      return <MuiLink to={`/entries/${slug}`}>{children}</MuiLink>;
    },
    [INLINES.ASSET_HYPERLINK]: (node) => {
      const { file } = node.data.target.fields;
      return (
        <MuiLink href={file.url} target="_blank" rel="noopener">
          {file.title}
        </MuiLink>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // Handle embedded entries as needed, depending on your content model
      return <div>{children}</div>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "vid") {
        const videoID = node.data.target.fields.youTubeVideo.split("/").pop();
        return (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        );
      }
      return <Alert severity="warning">Unsupported content type</Alert>;
    },
  },
};

const RichText = ({ content }) => {
  return (
    <Box >{documentToReactComponents(content, options)}</Box>
  );
};

export default RichText;

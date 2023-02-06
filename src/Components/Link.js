const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

export default Link;


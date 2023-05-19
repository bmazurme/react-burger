export function buildProperties(
  { baseUrl, props }: { baseUrl: string, props: Record<string, string> },
) {
  const currentUrl = props?.url ? `${baseUrl}/${props.url}` : baseUrl;
  const options: Record<string, string | Record<string, string>> = {};

  options.method = props?.method ? props.method : 'GET';
  options.headers = { 'Content-Type': 'application/json;charset=utf-8' };

  if (props?.body) {
    options.body = JSON.stringify(props.body);
  }

  return { currentUrl, options };
}

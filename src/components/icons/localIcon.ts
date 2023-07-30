import local_icons from "./localIcons.json";

const localIcons = local_icons as any;

function getLocalIcons(icon: string) {
  if (icon.slice(0, 6) !== "local:") return "";
  let [family, name] = icon.slice(6).split(".");
  const svg = localIcons[name].svg[family].raw.replaceAll(
    "<path",
    "<path fill='currentColor' "
  );
  if (!svg) console.error(`${family}-${name} not found!`);
  return svg || "";
}

export { localIcons, getLocalIcons };

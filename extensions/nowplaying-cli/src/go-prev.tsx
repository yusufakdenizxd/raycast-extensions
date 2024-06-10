import { Toast, closeMainWindow, showToast } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { checkCli } from "./util";

export default async () => {
  const exists = await checkCli();
  if (exists) {
    await runAppleScript(`do shell script "
    cd /opt/homebrew/bin
    nowplaying-cli previous
    "`);
    await closeMainWindow();
  } else {
    showToast({
      style: Toast.Style.Failure,
      title: "nowplaying-cli not found",
      message: "Install nowplaying-cli via homebrew",
    });
  }
};

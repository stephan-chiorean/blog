import { buildLegacyTheme } from "sanity";

const props = {
    "--beach0": "#FA6945",
    "--beach1": "#264653",
    "--beach2": "#2A9D8F",
    "--beach3": "#E9C46A",
    "--beach4": "#F4A261",
    "--beach5": "#14DF07"
}

export const myTheme = buildLegacyTheme({
    "--black": props["--beach1"],
    "--white": props["--beach0"],

    "--gray": props["--beach3"],
    "--gray-base": props["--beach3"],

    "--component-bg": props["--beach1"],
    "--component-text-color": props["--beach4"],

    "--brand-primary": props["--beach0"],

    "--default-button-color": props["--beach2"],
    "--default-button-primary-color": props["--beach5"],
    "--default-button-success-color": props["--beach5"],
    "--default-button-warning-color": props["--beach0"],
    "--default-button-danger-color": props["--beach0"],

    "--state-info-color": props["--beach5"],
    "--state-success-color": props["--beach5"],
    "--state-warning-color": props["--beach0"],
    "--state-danger-color": props["--beach0"],

    "--main-navigation-color": props["--beach1"],
    "--main-navigation-color--inverted": props["--beach4"],

    "--focus-color": props["--beach2"]
})
import { computed } from "vue";
import makeResponsive from "../makeResponsive";

export default (props) => {
  return {
    spacerClasses: computed(() => {
      return [
        makeResponsive("dj-mx-", props.mx),
        makeResponsive("dj-my-", props.my),
        makeResponsive("dj-ml-", props.ml),
        makeResponsive("dj-mr-", props.mr),
        makeResponsive("dj-mt-", props.mt),
        makeResponsive("dj-mb-", props.mb),
        makeResponsive("dj-px-", props.px),
        makeResponsive("dj-py-", props.py),
        makeResponsive("dj-pl-", props.pl),
        makeResponsive("dj-pr-", props.pr),
        makeResponsive("dj-pt-", props.pt),
        makeResponsive("dj-pb-", props.pb),
      ];
    }),
  };
};

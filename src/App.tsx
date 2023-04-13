import { defineComponent } from "vue";
import { VSelect } from "vuetify/components";

export default defineComponent({
  name: "App",
  data(): { options: string[] } {
    return {
      options: ["1", "2", "3"],
    };
  },
  render() {
    return (
      <div>
        <VSelect label="My Select" items={this.options} />
      </div>
    );
  },
});

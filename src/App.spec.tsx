import { fireEvent, render, screen } from "@testing-library/vue";
import { createApp, getCurrentInstance, h } from "vue";
import App from "./App";
import vuetify from "./plugins/vuetify";

export const renderWithVuetify = (component) => {
  const app = createApp({});

  [vuetify].forEach(app.use);

  return render(() => {
    const instance = getCurrentInstance();
    if (instance === null) {
      throw "instance is null";
    } else {
      Object.assign(instance.appContext.provides, app._context.provides); // this was modified to make the whole thing work, for some reason `Object.assign(instance.appContext, app._context);` didn't work, was giving `Error: [Vuetify] Could not find defaults instance`
    }
    return h(component);
  });
};

it("works", async () => {
  renderWithVuetify(App);
  const updateTypeSelectElement =
    screen.getByLabelText<HTMLSelectElement>("My Select");

  // Act
  await fireEvent.click(updateTypeSelectElement);
  await fireEvent.click(screen.getAllByRole("listbox")[0]);
  await fireEvent.click(updateTypeSelectElement);
});

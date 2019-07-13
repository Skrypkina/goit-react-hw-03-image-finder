TESTS

renders SearchForm : mock App, expect to find 1 SearchForm

does not render a Gallery when there are no images: mock App, set state to
images: [] , expect to find 0 images

renders a Gallery when there is at least one image: mock App ,set state to
images: ['one image'], expect to find 1 image

renders openModal when there is at least one image: mock App, set state images:
['one image'], simulate "openModal" event with simulate(), feed props to
component, assert that mocks were called once

renders closeModal when the state isModalOpen is true: mock App, set the state
isModalOpen to true, simulate "closeModal" event with simulate(), feed props to
component, assert that mocks were called once

renders clearImages: mock App, simulate "clearImages" with simulate(), assert
that mocks were called once

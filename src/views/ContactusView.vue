<template>
    <div class="contactme">
        <section class="contact">
            <div class="container-fluid">
              <h4
                class="display-4 text-center p-3 text-decoration-underline" id="h14"
              >
                Contact Us!
              </h4>
            </div>
            <div class="container-fluid contactsForm">
              <form action="https://formspree.io/f/xzbqnzza" method="POST">
                <div class="mb-1 p-3 mt-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >First Name:</label
                  >
                  <input
                    type="First Name"
                    name="First Name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-1 p-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Last Name:</label
                  >
                  <input
                    type="Last Name"
                    name="Last Name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Surname
                  "
                  />
                </div>
                <div class="mb-3 p-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email address:</label
                  >
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="p-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                    >Please leave a message:</label
                  >
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <div class="btns">
                    <button class="formButton mt-3 butn1" type="submit">Send</button>
                    <button class="formButton mt-3 butn2" type="reset">Clear</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contactme{
  background-color: #F2BED1;
}
</style>
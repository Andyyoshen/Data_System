<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Recipient:</label>
        <input type="text" class="form-control" id="recipient-name" />
      </div>
      <div class="mb-3">
        <label for="message-text" class="col-form-label">Message:</label>
        <textarea class="form-control" id="message-text"></textarea>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "bootest",
  data() {
    return {
      code: "",
    };
  },
  mounted() {},
  methods: {
    Showdialog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("exampleModal"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
  },
};
</script>

<template>
  <div class="form-group align-items-center">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input
        :type="type"
        class="form-control"
        :class="getClasses(size, valid, align)"
        :name="name"
        :id="id"
        :align="align"
        :value="modelValue"
        :placeholder="placeholder"
        :isRequired="isRequired"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "argon-input",
  props: {
    modelValue: {
      default: null,
    },
    size: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: "default",
    },
    icon: String,
    iconDir: String,
    name: String,
    id: String,
    value: String,
    placeholder: String,
    type: String,
    isRequired: Boolean,
  },
  methods: {
    getClasses: (size, valid, align) => {
      let sizeValue, isValidValue, alignValue;

      sizeValue = size ? `form-control-${size}` : null;

      alignValue = align ? `form-row align-items-${align}` : null;


      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue} ${alignValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
    hasIcon: (icon) => (icon ? "input-group" : null),
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const input = (value) => emit('update:modelValue', value)

    return {
      input,
    }
  },
};
</script>

<template>
    <div class="form-group">
      <div :class="hasIcon(icon)">
        <span v-if="iconDir === 'left'" class="input-group-text">
          <i :class="getIcon(icon)"></i>
        </span>
        <select
          class="form-control"
          :class="getClasses(size, valid)"
          :name="name"
          :id="id"
          :value="value"
          :placeholder="placeholder"
          :isRequired="isRequired"
          v-model="gender"
          :onChange="$emit('update:modelValue', this.gender)"
        >
            <option selected>selecione uma opção </option>
            <option
            v-for="option in options"
            v-bind:key="option.id"
            :value="option.value">
              {{option.name}}
            </option>
        </select>
        <span v-if="iconDir === 'right'" class="input-group-text">
          <i :class="getIcon(icon)"></i>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "argon-select",
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
      icon: String,
      iconDir: String,
      name: String,
      id: String,
      value: String,
      options: Array,
      placeholder: String,
      type: String,
      isRequired: Boolean,
    },
    data() {
        return {
            gender: ''
        }
    },
    methods: {
      getClasses: (size, valid) => {
        let sizeValue, isValidValue;
  
        sizeValue = size ? `form-control-${size}` : null;
  
        isValidValue = valid ? `${valid}` : "invalid";
  
        return `${sizeValue} ${isValidValue}`;
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
  
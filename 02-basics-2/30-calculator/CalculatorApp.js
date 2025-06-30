import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const calculatorElements = ref({
      firstOperand: 0,
      secondOperand: 0,
      action: 'sum'
    });

    const result = computed(() => {
      switch (calculatorElements.value.action) {
        case 'sum':
          return calculatorElements.value.firstOperand + calculatorElements.value.secondOperand;
        case 'subtract':
          return calculatorElements.value.firstOperand - calculatorElements.value.secondOperand;
        case 'multiply':
          return calculatorElements.value.firstOperand * calculatorElements.value.secondOperand;
        case 'divide':
          return calculatorElements.value.firstOperand / calculatorElements.value.secondOperand;
      }
    });

    return {
      result,
      calculatorElements
    };
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="calculatorElements.firstOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="calculatorElements.action"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="calculatorElements.action"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="calculatorElements.action"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="calculatorElements.action"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="calculatorElements.secondOperand" />

      <div>=</div>

      <output>{{result}}</output>
    </div>
  `,
})

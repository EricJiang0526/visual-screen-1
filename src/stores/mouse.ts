import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useMouseStore = defineStore('mouse', () => {
	const useMouse = ref(false);
	const x = ref(0);
	const y = ref(0);

	return { useMouse, x, y };
});

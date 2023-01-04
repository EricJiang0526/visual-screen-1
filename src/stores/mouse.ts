import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useMouseStore = defineStore('mouse', () => {
	const useMouse = ref(false);
	const x = ref(0);
	const y = ref(0);

	const moveMouse = (newX: number, newY: number) => {
		x.value = newX;
		y.value = newY;
	};

	return { useMouse, x, y, moveMouse };
});

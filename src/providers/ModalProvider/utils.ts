const firstTransitionChild = {
	enter: 'ease-out duration-300',
	enterFrom: 'opacity-0',
	enterTo: 'opacity-100',
	leave: 'ease-in duration-200',
	leaveFrom: 'opacity-100',
	leaveTo: 'opacity-0',
};

const secondTransitionChild = {
	enter: 'ease-out duration-300',
	enterFrom: 'opacity-0 scale-95',
	enterTo: 'opacity-100 scale-100',
	leave: 'ease-in duration-200',
	leaveFrom: 'opacity-100 scale-100',
	leaveTo: 'opacity-0 scale-95',
};

export { firstTransitionChild, secondTransitionChild };

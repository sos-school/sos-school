import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.f2c1190d.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let span;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let h2;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Welcome to ");
			span = element("span");
			t2 = text("SOSchool");
			t3 = space();
			img = element("img");
			t4 = space();
			h2 = element("h2");
			t5 = text("We help your children catch up with their studies following the covid-19 lockdown");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ssk1ji\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Welcome to ");
			span = claim_element(h1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "SOSchool");
			span_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
			t4 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "We help your children catch up with their studies following the covid-19 lockdown");
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "SOSchool Luxembourg";
			attr_dev(span, "class", "svelte-1x6r927");
			add_location(span, file, 30, 15, 458);
			attr_dev(h1, "class", "svelte-1x6r927");
			add_location(h1, file, 30, 0, 443);
			attr_dev(img, "alt", "SOSchool logo");
			if (img.src !== (img_src_value = "logo.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1x6r927");
			add_location(img, file, 32, 0, 486);
			attr_dev(h2, "class", "svelte-1x6r927");
			add_location(h2, file, 34, 0, 528);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, span);
			append_dev(span, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGNiM2VmMzEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

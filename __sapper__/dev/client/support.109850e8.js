import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, o as set_style, l as insert_dev, m as append_dev, n as noop, a as space, p as create_component, q as query_selector_all, c as claim_space, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.79972375.js';

/* src/components/Coffee.svelte generated by Svelte v3.24.0 */

const file = "src/components/Coffee.svelte";

function create_fragment(ctx) {
	let link;
	let a;
	let img;
	let img_src_value;
	let span;
	let t;

	const block = {
		c: function create() {
			link = element("link");
			a = element("a");
			img = element("img");
			span = element("span");
			t = text("Buy SOSchool a coffee");
			this.h();
		},
		l: function claim(nodes) {
			link = claim_element(nodes, "LINK", { href: true, rel: true });
			a = claim_element(nodes, "A", { class: true, target: true, href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
			span = claim_element(a_nodes, "SPAN", { style: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Buy SOSchool a coffee");
			span_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "href", "https://fonts.googleapis.com/css?family=Cookie");
			attr_dev(link, "rel", "stylesheet");
			add_location(link, file, 0, 1144, 1144);
			if (img.src !== (img_src_value = "https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Buy me a coffee");
			attr_dev(img, "class", "svelte-gf03j9");
			add_location(img, file, 0, 1304, 1304);
			set_style(span, "margin-left", "5px");
			set_style(span, "font-size", "28px", 1);
			add_location(span, file, 0, 1395, 1395);
			attr_dev(a, "class", "bmc-button svelte-gf03j9");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "href", "https://www.buymeacoffee.com/SOSchool");
			add_location(a, file, 0, 1221, 1221);
		},
		m: function mount(target, anchor) {
			insert_dev(target, link, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, img);
			append_dev(a, span);
			append_dev(span, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(link);
			if (detaching) detach_dev(a);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Coffee> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Coffee", $$slots, []);
	return [];
}

class Coffee extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Coffee",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/support.svelte generated by Svelte v3.24.0 */
const file$1 = "src/routes/support.svelte";

function create_fragment$1(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let h20;
	let t3;
	let t4;
	let coffee;
	let t5;
	let h21;
	let t6;
	let current;
	coffee = new Coffee({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Support Us");
			t2 = space();
			h20 = element("h2");
			t3 = text("Buy Us a Coffee!");
			t4 = space();
			create_component(coffee.$$.fragment);
			t5 = space();
			h21 = element("h2");
			t6 = text("or Join Our Team");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-mvwbkb\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Support Us");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", {});
			var h20_nodes = children(h20);
			t3 = claim_text(h20_nodes, "Buy Us a Coffee!");
			h20_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(coffee.$$.fragment, nodes);
			t5 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", {});
			var h21_nodes = children(h21);
			t6 = claim_text(h21_nodes, "or Join Our Team");
			h21_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Support | SOSchool";
			add_location(h1, file$1, 8, 0, 136);
			add_location(h20, file$1, 10, 0, 157);
			add_location(h21, file$1, 14, 0, 196);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t3);
			insert_dev(target, t4, anchor);
			mount_component(coffee, target, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t6);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(coffee.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(coffee.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(t4);
			destroy_component(coffee, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(h21);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Support> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Support", $$slots, []);
	$$self.$capture_state = () => ({ Coffee });
	return [];
}

class Support extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Support",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Support;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC4xMDk4NTBlOC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

import { html } from "../util/html.mjs";

export function renderModeToggler() {
	return html`<script src="https://unpkg.com/css-prefers-color-scheme@8.0.0/dist/browser-global.js"></script>
<script>
	var prefersColorScheme = window.prefersColorSchemeInit();
	(function () {
		prefersColorScheme.onChange = function() {
			if (!isSchemeManuallyChanging) {
				$inputSystem.checked = true;
			}
		};

		var schemes = { system: prefersColorScheme.scheme };
		var isSchemeManuallyChanging = false;

		var create = function(type, attrs) {
			var $element = document.createElement(type);

			for (var attr in Object(attrs)) {
				$element.setAttribute(attr, attrs[attr]);
			}

			return $element;
		};

		var $toggle = create('span', { class: 'cssdb-color_scheme_toggle', role: 'group', title: 'select a color scheme' });
		$toggle.appendChild(create('input', { type: 'radio', name: 'scheme', value: 'dark',   'aria-label': 'dark color scheme' }));
		var $inputSystem = $toggle.appendChild(create('input', { type: 'radio', name: 'scheme', value: 'system', 'aria-label': 'system color scheme', checked: '' }));
		$toggle.appendChild(create('input', { type: 'radio', name: 'scheme', value: 'light',  'aria-label': 'light color scheme' }));
		$toggle.appendChild(create('label'));

		$toggle.addEventListener('change', function(event) {
			var scheme = event.target.value;

			isSchemeManuallyChanging = true;
			prefersColorScheme.scheme = schemes[scheme] || scheme;
			isSchemeManuallyChanging = false;
		});

		document.body.insertBefore($toggle, document.querySelector('main'));
	})();
</script>
`;
}

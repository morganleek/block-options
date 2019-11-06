/**
 * Internal dependencies
 */
import EditorsKitDocs from './docs';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, Component, RawHTML, render } = wp.element;
const { TabPanel, Panel, PanelHeader, PanelBody, PanelRow } = wp.components;

class EditorsKitSettings extends Component {
	constructor() {
		super(...arguments)
	}

	render() {
		const onSelect = (tabName) => {
			console.log('Selecting tab', tabName);
		};

		const MyTabPanel = () => (
			<TabPanel className="editorskit-settings-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'ek-getting-started',
						title: 'Gettings Started',
						className: 'ek-settings-getting-started',
					},
					{
						name: 'ek-docs',
						title: 'Tutorial and Docs',
						className: 'ek-settings-docs',
					},
					{
						name: 'ek-features-manager',
						title: 'Features Manager',
						className: 'ek-settings-features-manager',
					},
				]}>
				{
					(tab) => {
						switch (tab.name ) {
							case 'ek-getting-started':
								return(
									<Fragment>
										<div className="editorskit-started-items-wrapper">
											<div className="editorskit-started-item">
												<p>{__( 'EditorsKit provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'block-options' ) }</p>
											</div>
											<div className="editorskit-started-item">
												<iframe width="560" height="380" src="https://www.youtube.com/embed/QWgO4lAJAlE" frameborder="0" allowfullscreen></iframe>
											</div>
											<div className="editorskit-started-item">
												<RawHTML>
													{ sprintf(
														__('If you have any questions or suggestion, let us know through %1$sTwitter%4$s or our %2$sFacebook community %4$s. Also, %3$ssubscribe to our newsletter%4$s if you want to stay up to date with what\'s new and upcoming at EditorsKit.', 'block-options' ),
														'<a href="https://twitter.com/editorskit" target="_blank">',
														'<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank">',
														'<a href="https://editorskit.com/" target="_blank">',
														'</a>'
													) }
												</RawHTML>
											</div>
										</div>
									</Fragment>
								);
								break;
							case 'ek-docs':
								return(
									<EditorsKitDocs />
								);
								break;
						
							default:
								return(
									<p>Laboriosam asperiores voluptates qui veritatis similique et culpa. Consequatur mollitia aliquam consequatur accusantium aperiam. Perspiciatis minima earum alias rerum quis itaque. Itaque fuga commodi omnis distinctio. Laboriosam corporis itaque possimus laboriosam labore. Ad vitae iste ullam et blanditiis. A et libero voluptatem et blanditiis. Asperiores illo quos molestiae eum porro ut.</p>
								);
								break;
						}
					}
				}
			</TabPanel>
		);

		const MyPanel = () => (
			<Panel>
				<PanelBody
					opened={true}
				>
					<div class="components-panel__header">
						<p class="editorskit-panel__header-hint">{__('Settings → EditorsKit', 'block-options') }</p>
						<h2>{__('Gettings Started with', 'block-options')} <strong>EditorsKit</strong><code>{ window.editorskitSettings.version }</code></h2>
						<p>{__('Congratulations! You\'ve just unlocked more Gutenberg block editor tools for easier editing and better workflow. Check more information about the plugin below and please make sure to navigate through "Tutorials and Docs" tab to learn more on how to use each available features.', 'block-options')}</p>
					</div>
					<PanelRow>
						<MyTabPanel />
           			</PanelRow>
				</PanelBody>
			</Panel>
		);

		return (
			<Fragment>
				<MyPanel/>
			</Fragment>
		)
	}
}

wp.domReady(() => {
	render(
		<EditorsKitSettings />,
		document.querySelector('.editorskit-settings-wrap')
	)
})
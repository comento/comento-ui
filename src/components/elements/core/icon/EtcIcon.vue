<script>
import BaseIcon from '@/components/elements/core/icon/BaseIcon.vue';
import IconDropdownMediumLineEtc from '@/assets/images/icon/etc/icon-dropdown-medium-line-etc.svg?inline';
import IconDropdownSmallFillEtc from '@/assets/images/icon/etc/icon-dropdown-small-fill-etc.svg?inline';
import customValidator from '@/utils/custom-validator';

export const EtcIconNames = ['IconDropdownMediumLineEtc', 'IconDropdownSmallFillEtc'];

/**
 * @displayName c-etc-icon
 */
export default {
	name: 'EtcIcon',
	extends: BaseIcon,
	props: {
		name: {
			type: String,
			default: null,
			validator(value) {
				const isValid = EtcIconNames.indexOf(value) !== -1;
				return customValidator(value, isValid, 'EtcIcon', 'name');
			},
		},
	},
	components: {
		IconDropdownMediumLineEtc,
		IconDropdownSmallFillEtc,
	},
};
</script>

import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => PARTNERS;

export const selectFeaturedPartner = () => PARTNERS.find((item) => item.featured);

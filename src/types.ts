export interface GIFObject {
    type: string;
    id: string;
    slug: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    content_url: string;
    user?: {
        avatar_url: string;
        banner_url: string;
        profile_url: string;
        username: string;
        display_name: string;
        twitter: string;
    };
    source_tld: string;
    source_post_url: string;
    update_datetime: string;
    create_datetime: string;
    import_datetime: string;
    trending_datetime: string;
    title: string;
    images: any;
}

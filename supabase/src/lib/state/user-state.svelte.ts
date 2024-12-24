import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { getContext, setContext } from 'svelte';
import { goto } from '$app/navigation';

interface UserStateProps {
	session: Session | null;
	supabase: SupabaseClient | null;
	user: User | null;
}

interface Book {
	author: string | null
	cover_image: string | null
	created_at: string
	description: string | null
	finished_reading_on: string | null
	genre: string | null
	id: number
	rating: number | null
	started_reading_on: string | null
	title: string | null
	user_id: string
}

export class UserStateSvelte {
	session = $state<Session | null>(null);
	supabase = $state<SupabaseClient | null>(null);
	user = $state<User | null>(null);
	allBooks = $state<Book[]>([]);

	constructor(data: UserStateProps) {
		this.updateState(data);
	}

	updateState(data: UserStateProps) {
		this.session = data.session;
		this.supabase = data.supabase;
		this.user = data.user;
	}

	async logout() {
		await this.supabase?.auth.signOut();
		await goto("/login");
	}

}

const USER_STATE_KEY = Symbol("USER_STATE");

export function setUserState(data: UserStateProps) {
	return setContext(USER_STATE_KEY, new UserStateSvelte(data));
}

export function getUserState() {
	return getContext<ReturnType<typeof setUserState>>(USER_STATE_KEY);
}
import { type Session, SupabaseClient, type User } from '@supabase/supabase-js';

interface UserStateProps {
	session: Session | null;
	supabase: SupabaseClient | null;
	user: User | null;
}

export class UserState {
	session = $state<Session | null>(null);
	supabase = $state<SupabaseClient | null>(null);
	user = $state<User | null>(null);

	constructor(data: UserStateProps) {
		this.updateState(data);
	}

	updateState(data: UserStateProps) {
		this.session = data.session;
		this.supabase = data.supabase;
		this.user = data.user;
	}

}
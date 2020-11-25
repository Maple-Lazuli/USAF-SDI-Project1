
CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO accountmanager;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: accountmanager
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO accountmanager;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: accountmanager
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: accountmanager
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO accountmanager;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: accountmanager
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO accountmanager;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: accountmanager
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: supervisors; Type: TABLE; Schema: public; Owner: accountmanager
--

CREATE TABLE public.supervisors (
    index integer NOT NULL,
    "user" integer NOT NULL,
    supervisor integer NOT NULL
);


ALTER TABLE public.supervisors OWNER TO accountmanager;

--
-- Name: supervisors_index_seq; Type: SEQUENCE; Schema: public; Owner: accountmanager
--

CREATE SEQUENCE public.supervisors_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.supervisors_index_seq OWNER TO accountmanager;

--
-- Name: supervisors_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: accountmanager
--

ALTER SEQUENCE public.supervisors_index_seq OWNED BY public.supervisors.index;


--
-- Name: users; Type: TABLE; Schema: public; Owner: accountmanager
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    sessionid integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    paygrade character varying(255) NOT NULL,
    rank character varying(255) NOT NULL,
    gender character varying(255) NOT NULL,
    "rankInt" character varying(255) NOT NULL,
    "AFSC" character varying(255) NOT NULL,
    unit character varying(255) NOT NULL,
    "DOR" character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO accountmanager;

--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: accountmanager
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO accountmanager;

--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: accountmanager
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: supervisors index; Type: DEFAULT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.supervisors ALTER COLUMN index SET DEFAULT nextval('public.supervisors_index_seq'::regclass);


--
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: accountmanager
--


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: accountmanager
--


--
-- Data for Name: supervisors; Type: TABLE DATA; Schema: public; Owner: accountmanager
--

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: accountmanager
--
--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: accountmanager
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 25, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: accountmanager
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: supervisors_index_seq; Type: SEQUENCE SET; Schema: public; Owner: accountmanager
--

SELECT pg_catalog.setval('public.supervisors_index_seq', 1, false);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: accountmanager
--

SELECT pg_catalog.setval('public.users_userid_seq', 63, true);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: supervisors supervisors_pkey; Type: CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.supervisors
    ADD CONSTRAINT supervisors_pkey PRIMARY KEY (index);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- Name: supervisors supervisors_supervisor_foreign; Type: FK CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.supervisors
    ADD CONSTRAINT supervisors_supervisor_foreign FOREIGN KEY (supervisor) REFERENCES public.users(userid) ON DELETE CASCADE;


--
-- Name: supervisors supervisors_user_foreign; Type: FK CONSTRAINT; Schema: public; Owner: accountmanager
--

ALTER TABLE ONLY public.supervisors
    ADD CONSTRAINT supervisors_user_foreign FOREIGN KEY ("user") REFERENCES public.users(userid) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


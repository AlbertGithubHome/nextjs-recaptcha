// lib/supabaseService.ts
import { createClient } from '@supabase/supabase-js';

// 定义 Profile 表的数据结构
type Profile = {
    id?: number; // 自增主键可以是可选的
    name: string;
    age: number;
  };

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchData(table: string) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  return data;
}

export async function insertData(table: string, values: Profile) {
  const { data, error } = await supabase.from(table).insert(values).select();
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}

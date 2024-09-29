介绍Supabase在Next.js框架中使用

## Getting Started

1. 安装Supabase模块
 ```bash
 npm install @supabase/supabase-js
 ```

2. 定义公共处理文件 `lib/supabaseService.tsx`

```tsx
// lib/supabaseService.ts
import { createClient } from '@supabase/supabase-js';

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

export async function insertData(table: string, values: any) {
  const { data, error } = await supabase.from(table).insert(values).select();
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}
```

3. 然后定义前端页面 `app/table` 进行数据展示，定义 `app/user` 用于提交表单，定义 `app/api/insert-data` 路由用于插入数据，详细实现参考文件内实现代码






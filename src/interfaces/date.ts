interface Date {
  beginningOfDay(): Date;
  endOfDay(): Date;
}

interface DateConstructor {
  yesterday(): Date;
}

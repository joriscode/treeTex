/** @constructor */
ScalaJS.c.scala_Console$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.BLACK$1 = null;
  this.RED$1 = null;
  this.GREEN$1 = null;
  this.YELLOW$1 = null;
  this.BLUE$1 = null;
  this.MAGENTA$1 = null;
  this.CYAN$1 = null;
  this.WHITE$1 = null;
  this.BLACK$undB$1 = null;
  this.RED$undB$1 = null;
  this.GREEN$undB$1 = null;
  this.YELLOW$undB$1 = null;
  this.BLUE$undB$1 = null;
  this.MAGENTA$undB$1 = null;
  this.CYAN$undB$1 = null;
  this.WHITE$undB$1 = null;
  this.RESET$1 = null;
  this.BOLD$1 = null;
  this.UNDERLINED$1 = null;
  this.BLINK$1 = null;
  this.REVERSED$1 = null;
  this.INVISIBLE$1 = null;
  this.outVar$1 = null;
  this.errVar$1 = null;
  this.inVar$1 = null
});
ScalaJS.c.scala_Console$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Console$.prototype.constructor = ScalaJS.c.scala_Console$;
ScalaJS.c.scala_Console$.prototype.BLACK__T = (function() {
  return "\u001b[30m"
});
ScalaJS.c.scala_Console$.prototype.RED__T = (function() {
  return "\u001b[31m"
});
ScalaJS.c.scala_Console$.prototype.GREEN__T = (function() {
  return "\u001b[32m"
});
ScalaJS.c.scala_Console$.prototype.YELLOW__T = (function() {
  return "\u001b[33m"
});
ScalaJS.c.scala_Console$.prototype.BLUE__T = (function() {
  return "\u001b[34m"
});
ScalaJS.c.scala_Console$.prototype.MAGENTA__T = (function() {
  return "\u001b[35m"
});
ScalaJS.c.scala_Console$.prototype.CYAN__T = (function() {
  return "\u001b[36m"
});
ScalaJS.c.scala_Console$.prototype.WHITE__T = (function() {
  return "\u001b[37m"
});
ScalaJS.c.scala_Console$.prototype.BLACK$undB__T = (function() {
  return "\u001b[40m"
});
ScalaJS.c.scala_Console$.prototype.RED$undB__T = (function() {
  return "\u001b[41m"
});
ScalaJS.c.scala_Console$.prototype.GREEN$undB__T = (function() {
  return "\u001b[42m"
});
ScalaJS.c.scala_Console$.prototype.YELLOW$undB__T = (function() {
  return "\u001b[43m"
});
ScalaJS.c.scala_Console$.prototype.BLUE$undB__T = (function() {
  return "\u001b[44m"
});
ScalaJS.c.scala_Console$.prototype.MAGENTA$undB__T = (function() {
  return "\u001b[45m"
});
ScalaJS.c.scala_Console$.prototype.CYAN$undB__T = (function() {
  return "\u001b[46m"
});
ScalaJS.c.scala_Console$.prototype.WHITE$undB__T = (function() {
  return "\u001b[47m"
});
ScalaJS.c.scala_Console$.prototype.RESET__T = (function() {
  return "\u001b[0m"
});
ScalaJS.c.scala_Console$.prototype.BOLD__T = (function() {
  return "\u001b[1m"
});
ScalaJS.c.scala_Console$.prototype.UNDERLINED__T = (function() {
  return "\u001b[4m"
});
ScalaJS.c.scala_Console$.prototype.BLINK__T = (function() {
  return "\u001b[5m"
});
ScalaJS.c.scala_Console$.prototype.REVERSED__T = (function() {
  return "\u001b[7m"
});
ScalaJS.c.scala_Console$.prototype.INVISIBLE__T = (function() {
  return "\u001b[8m"
});
ScalaJS.c.scala_Console$.prototype.outVar__p1__Lscala_util_DynamicVariable = (function() {
  return this.outVar$1
});
ScalaJS.c.scala_Console$.prototype.errVar__p1__Lscala_util_DynamicVariable = (function() {
  return this.errVar$1
});
ScalaJS.c.scala_Console$.prototype.inVar__p1__Lscala_util_DynamicVariable = (function() {
  return this.inVar$1
});
ScalaJS.c.scala_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return ScalaJS.as.java_io_PrintStream(this.outVar__p1__Lscala_util_DynamicVariable().value__O())
});
ScalaJS.c.scala_Console$.prototype.err__Ljava_io_PrintStream = (function() {
  return ScalaJS.as.java_io_PrintStream(this.errVar__p1__Lscala_util_DynamicVariable().value__O())
});
ScalaJS.c.scala_Console$.prototype.$in__Ljava_io_BufferedReader = (function() {
  return ScalaJS.as.java_io_BufferedReader(this.inVar__p1__Lscala_util_DynamicVariable().value__O())
});
ScalaJS.c.scala_Console$.prototype.setOut__Ljava_io_PrintStream__V = (function(out) {
  this.outVar__p1__Lscala_util_DynamicVariable().value$und$eq__O__V(out)
});
ScalaJS.c.scala_Console$.prototype.withOut__Ljava_io_PrintStream__Lscala_Function0__O = (function(out, thunk) {
  return this.outVar__p1__Lscala_util_DynamicVariable().withValue__O__Lscala_Function0__O(out, thunk)
});
ScalaJS.c.scala_Console$.prototype.setOut__Ljava_io_OutputStream__V = (function(out) {
  this.setOut__Ljava_io_PrintStream__V(new ScalaJS.c.java_io_PrintStream().init___Ljava_io_OutputStream(out))
});
ScalaJS.c.scala_Console$.prototype.withOut__Ljava_io_OutputStream__Lscala_Function0__O = (function(out, thunk) {
  return this.withOut__Ljava_io_PrintStream__Lscala_Function0__O(new ScalaJS.c.java_io_PrintStream().init___Ljava_io_OutputStream(out), thunk)
});
ScalaJS.c.scala_Console$.prototype.setErr__Ljava_io_PrintStream__V = (function(err) {
  this.errVar__p1__Lscala_util_DynamicVariable().value$und$eq__O__V(err)
});
ScalaJS.c.scala_Console$.prototype.withErr__Ljava_io_PrintStream__Lscala_Function0__O = (function(err, thunk) {
  return this.errVar__p1__Lscala_util_DynamicVariable().withValue__O__Lscala_Function0__O(err, thunk)
});
ScalaJS.c.scala_Console$.prototype.setErr__Ljava_io_OutputStream__V = (function(err) {
  this.setErr__Ljava_io_PrintStream__V(new ScalaJS.c.java_io_PrintStream().init___Ljava_io_OutputStream(err))
});
ScalaJS.c.scala_Console$.prototype.withErr__Ljava_io_OutputStream__Lscala_Function0__O = (function(err, thunk) {
  return this.withErr__Ljava_io_PrintStream__Lscala_Function0__O(new ScalaJS.c.java_io_PrintStream().init___Ljava_io_OutputStream(err), thunk)
});
ScalaJS.c.scala_Console$.prototype.setIn__Ljava_io_Reader__V = (function(reader) {
  this.inVar__p1__Lscala_util_DynamicVariable().value$und$eq__O__V(new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader(reader))
});
ScalaJS.c.scala_Console$.prototype.withIn__Ljava_io_Reader__Lscala_Function0__O = (function(reader, thunk) {
  return this.inVar__p1__Lscala_util_DynamicVariable().withValue__O__Lscala_Function0__O(new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader(reader), thunk)
});
ScalaJS.c.scala_Console$.prototype.setIn__Ljava_io_InputStream__V = (function(in$2) {
  this.setIn__Ljava_io_Reader__V(new ScalaJS.c.java_io_InputStreamReader().init___Ljava_io_InputStream(in$2))
});
ScalaJS.c.scala_Console$.prototype.withIn__Ljava_io_InputStream__Lscala_Function0__O = (function(in$2, thunk) {
  return this.withIn__Ljava_io_Reader__Lscala_Function0__O(new ScalaJS.c.java_io_InputStreamReader().init___Ljava_io_InputStream(in$2), thunk)
});
ScalaJS.c.scala_Console$.prototype.print__O__V = (function(obj) {
  var jsx$2 = this.out__Ljava_io_PrintStream();
  if (ScalaJS.anyRefEqEq(null, obj)) {
    var jsx$1 = "null"
  } else {
    var jsx$1 = ScalaJS.objectToString(obj)
  };
  jsx$2.print__T__V(jsx$1)
});
ScalaJS.c.scala_Console$.prototype.flush__V = (function() {
  this.out__Ljava_io_PrintStream().flush__V()
});
ScalaJS.c.scala_Console$.prototype.println__V = (function() {
  this.out__Ljava_io_PrintStream().println__V()
});
ScalaJS.c.scala_Console$.prototype.println__O__V = (function(x) {
  this.out__Ljava_io_PrintStream().println__O__V(x)
});
ScalaJS.c.scala_Console$.prototype.printf__T__Lscala_collection_Seq__V = (function(text, args) {
  this.out__Ljava_io_PrintStream().print__T__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(text)).format__Lscala_collection_Seq__T(args))
});
ScalaJS.c.scala_Console$.prototype.readLine__T = (function() {
  return this.$in__Ljava_io_BufferedReader().readLine__T()
});
ScalaJS.c.scala_Console$.prototype.readLine__T__Lscala_collection_Seq__T = (function(text, args) {
  this.printf__T__Lscala_collection_Seq__V(text, args);
  return this.readLine__T()
});
ScalaJS.c.scala_Console$.prototype.readBoolean__Z = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(s);
    if (ScalaJS.anyRefEqEq("true", x1)) {
      return true
    };
    if (ScalaJS.anyRefEqEq("t", x1)) {
      return true
    };
    if (ScalaJS.anyRefEqEq("yes", x1)) {
      return true
    };
    if (ScalaJS.anyRefEqEq("y", x1)) {
      return true
    };
    return false
  }
});
ScalaJS.c.scala_Console$.prototype.readByte__B = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toByte__B()
  }
});
ScalaJS.c.scala_Console$.prototype.readShort__S = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toShort__S()
  }
});
ScalaJS.c.scala_Console$.prototype.readChar__C = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, 0)
  }
});
ScalaJS.c.scala_Console$.prototype.readInt__I = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toInt__I()
  }
});
ScalaJS.c.scala_Console$.prototype.readLong__J = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toLong__J()
  }
});
ScalaJS.c.scala_Console$.prototype.readFloat__F = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toFloat__F()
  }
});
ScalaJS.c.scala_Console$.prototype.readDouble__D = (function() {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).toDouble__D()
  }
});
ScalaJS.c.scala_Console$.prototype.readf__T__Lscala_collection_immutable_List = (function(format) {
  var s = this.readLine__T();
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_io_EOFException().init___T("Console has reached end of input")
  } else {
    return this.textComponents__p1__AO__Lscala_collection_immutable_List(new ScalaJS.c.java_text_MessageFormat().init___T(format).parse__T__AO(s))
  }
});
ScalaJS.c.scala_Console$.prototype.readf1__T__O = (function(format) {
  return this.readf__T__Lscala_collection_immutable_List(format).head__O()
});
ScalaJS.c.scala_Console$.prototype.readf2__T__Lscala_Tuple2 = (function(format) {
  var res = this.readf__T__Lscala_collection_immutable_List(format);
  return new ScalaJS.c.scala_Tuple2().init___O__O(res.head__O(), ScalaJS.as.scala_collection_IterableLike(res.tail__O()).head__O())
});
ScalaJS.c.scala_Console$.prototype.readf3__T__Lscala_Tuple3 = (function(format) {
  var res = this.readf__T__Lscala_collection_immutable_List(format);
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(res.head__O(), ScalaJS.as.scala_collection_IterableLike(res.tail__O()).head__O(), ScalaJS.as.scala_collection_IterableLike(ScalaJS.as.scala_collection_TraversableLike(res.tail__O()).tail__O()).head__O())
});
ScalaJS.c.scala_Console$.prototype.textComponents__p1__AO__Lscala_collection_immutable_List = (function(a) {
  var i = (a.underlying.length - 1);
  var res = ScalaJS.modules.scala_collection_immutable_Nil();
  while ((i >= 0)) {
    var x1 = a.underlying[i];
    matchEnd11: {
      if (ScalaJS.is.java_lang_Boolean(x1)) {
        var x2 = ScalaJS.as.java_lang_Boolean(x1);
        var x$1 = ScalaJS.bZ(x2.booleanValue__Z());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Byte(x1)) {
        var x3 = ScalaJS.as.java_lang_Byte(x1);
        var x$1 = ScalaJS.bB(x3.byteValue__B());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Short(x1)) {
        var x4 = ScalaJS.as.java_lang_Short(x1);
        var x$1 = ScalaJS.bS(x4.shortValue__S());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Character(x1)) {
        var x5 = ScalaJS.as.java_lang_Character(x1);
        var x$1 = ScalaJS.bC(x5.charValue__C());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Integer(x1)) {
        var x6 = ScalaJS.as.java_lang_Integer(x1);
        var x$1 = ScalaJS.bI(x6.intValue__I());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Long(x1)) {
        var x7 = ScalaJS.as.java_lang_Long(x1);
        var x$1 = ScalaJS.bJ(x7.longValue__J());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Float(x1)) {
        var x8 = ScalaJS.as.java_lang_Float(x1);
        var x$1 = ScalaJS.bF(x8.floatValue__F());
        break matchEnd11
      };
      if (ScalaJS.is.java_lang_Double(x1)) {
        var x9 = ScalaJS.as.java_lang_Double(x1);
        var x$1 = ScalaJS.bD(x9.doubleValue__D());
        break matchEnd11
      };
      var x$1 = x1;
      break matchEnd11
    };
    res = res.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
    i = (i - 1)
  };
  return res
});
ScalaJS.c.scala_Console$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_Console = this;
  this.outVar$1 = new ScalaJS.c.scala_util_DynamicVariable().init___O(ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream());
  this.errVar$1 = new ScalaJS.c.scala_util_DynamicVariable().init___O(ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream());
  this.inVar$1 = new ScalaJS.c.scala_util_DynamicVariable().init___O(null);
  return this
});
ScalaJS.c.scala_Console$.prototype.readf3__T__ = (function(format) {
  return this.readf3__T__Lscala_Tuple3(format)
});
ScalaJS.c.scala_Console$.prototype.readf2__T__ = (function(format$2) {
  return this.readf2__T__Lscala_Tuple2(format$2)
});
ScalaJS.c.scala_Console$.prototype.readf1__T__ = (function(format$3) {
  return this.readf1__T__O(format$3)
});
ScalaJS.c.scala_Console$.prototype.readf__T__ = (function(format$4) {
  return this.readf__T__Lscala_collection_immutable_List(format$4)
});
ScalaJS.c.scala_Console$.prototype.readDouble__ = (function() {
  return ScalaJS.bD(this.readDouble__D())
});
ScalaJS.c.scala_Console$.prototype.readFloat__ = (function() {
  return ScalaJS.bF(this.readFloat__F())
});
ScalaJS.c.scala_Console$.prototype.readLong__ = (function() {
  return ScalaJS.bJ(this.readLong__J())
});
ScalaJS.c.scala_Console$.prototype.readInt__ = (function() {
  return ScalaJS.bI(this.readInt__I())
});
ScalaJS.c.scala_Console$.prototype.readChar__ = (function() {
  return ScalaJS.bC(this.readChar__C())
});
ScalaJS.c.scala_Console$.prototype.readShort__ = (function() {
  return ScalaJS.bS(this.readShort__S())
});
ScalaJS.c.scala_Console$.prototype.readByte__ = (function() {
  return ScalaJS.bB(this.readByte__B())
});
ScalaJS.c.scala_Console$.prototype.readBoolean__ = (function() {
  return ScalaJS.bZ(this.readBoolean__Z())
});
ScalaJS.c.scala_Console$.prototype.readLine__T__Lscala_collection_Seq__ = (function(text, args) {
  return this.readLine__T__Lscala_collection_Seq__T(text, args)
});
ScalaJS.c.scala_Console$.prototype.readLine__ = (function() {
  return this.readLine__T()
});
ScalaJS.c.scala_Console$.prototype.printf__T__Lscala_collection_Seq__ = (function(text$2, args$2) {
  return ScalaJS.bV(this.printf__T__Lscala_collection_Seq__V(text$2, args$2))
});
ScalaJS.c.scala_Console$.prototype.println__O__ = (function(x) {
  return ScalaJS.bV(this.println__O__V(x))
});
ScalaJS.c.scala_Console$.prototype.println__ = (function() {
  return ScalaJS.bV(this.println__V())
});
ScalaJS.c.scala_Console$.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.scala_Console$.prototype.print__O__ = (function(obj) {
  return ScalaJS.bV(this.print__O__V(obj))
});
ScalaJS.c.scala_Console$.prototype.withIn__Ljava_io_InputStream__Lscala_Function0__ = (function(in$2, thunk) {
  return this.withIn__Ljava_io_InputStream__Lscala_Function0__O(in$2, thunk)
});
ScalaJS.c.scala_Console$.prototype.setIn__Ljava_io_InputStream__ = (function(in$3) {
  return ScalaJS.bV(this.setIn__Ljava_io_InputStream__V(in$3))
});
ScalaJS.c.scala_Console$.prototype.withIn__Ljava_io_Reader__Lscala_Function0__ = (function(reader, thunk$2) {
  return this.withIn__Ljava_io_Reader__Lscala_Function0__O(reader, thunk$2)
});
ScalaJS.c.scala_Console$.prototype.setIn__Ljava_io_Reader__ = (function(reader$2) {
  return ScalaJS.bV(this.setIn__Ljava_io_Reader__V(reader$2))
});
ScalaJS.c.scala_Console$.prototype.withErr__Ljava_io_OutputStream__Lscala_Function0__ = (function(err, thunk$3) {
  return this.withErr__Ljava_io_OutputStream__Lscala_Function0__O(err, thunk$3)
});
ScalaJS.c.scala_Console$.prototype.setErr__Ljava_io_OutputStream__ = (function(err$2) {
  return ScalaJS.bV(this.setErr__Ljava_io_OutputStream__V(err$2))
});
ScalaJS.c.scala_Console$.prototype.withErr__Ljava_io_PrintStream__Lscala_Function0__ = (function(err$3, thunk$4) {
  return this.withErr__Ljava_io_PrintStream__Lscala_Function0__O(err$3, thunk$4)
});
ScalaJS.c.scala_Console$.prototype.setErr__Ljava_io_PrintStream__ = (function(err$4) {
  return ScalaJS.bV(this.setErr__Ljava_io_PrintStream__V(err$4))
});
ScalaJS.c.scala_Console$.prototype.withOut__Ljava_io_OutputStream__Lscala_Function0__ = (function(out, thunk$5) {
  return this.withOut__Ljava_io_OutputStream__Lscala_Function0__O(out, thunk$5)
});
ScalaJS.c.scala_Console$.prototype.setOut__Ljava_io_OutputStream__ = (function(out$2) {
  return ScalaJS.bV(this.setOut__Ljava_io_OutputStream__V(out$2))
});
ScalaJS.c.scala_Console$.prototype.withOut__Ljava_io_PrintStream__Lscala_Function0__ = (function(out$3, thunk$6) {
  return this.withOut__Ljava_io_PrintStream__Lscala_Function0__O(out$3, thunk$6)
});
ScalaJS.c.scala_Console$.prototype.setOut__Ljava_io_PrintStream__ = (function(out$4) {
  return ScalaJS.bV(this.setOut__Ljava_io_PrintStream__V(out$4))
});
ScalaJS.c.scala_Console$.prototype.$in__ = (function() {
  return this.$in__Ljava_io_BufferedReader()
});
ScalaJS.c.scala_Console$.prototype.err__ = (function() {
  return this.err__Ljava_io_PrintStream()
});
ScalaJS.c.scala_Console$.prototype.out__ = (function() {
  return this.out__Ljava_io_PrintStream()
});
ScalaJS.c.scala_Console$.prototype.INVISIBLE__ = (function() {
  return this.INVISIBLE__T()
});
ScalaJS.c.scala_Console$.prototype.REVERSED__ = (function() {
  return this.REVERSED__T()
});
ScalaJS.c.scala_Console$.prototype.BLINK__ = (function() {
  return this.BLINK__T()
});
ScalaJS.c.scala_Console$.prototype.UNDERLINED__ = (function() {
  return this.UNDERLINED__T()
});
ScalaJS.c.scala_Console$.prototype.BOLD__ = (function() {
  return this.BOLD__T()
});
ScalaJS.c.scala_Console$.prototype.RESET__ = (function() {
  return this.RESET__T()
});
ScalaJS.c.scala_Console$.prototype.WHITE$undB__ = (function() {
  return this.WHITE$undB__T()
});
ScalaJS.c.scala_Console$.prototype.CYAN$undB__ = (function() {
  return this.CYAN$undB__T()
});
ScalaJS.c.scala_Console$.prototype.MAGENTA$undB__ = (function() {
  return this.MAGENTA$undB__T()
});
ScalaJS.c.scala_Console$.prototype.BLUE$undB__ = (function() {
  return this.BLUE$undB__T()
});
ScalaJS.c.scala_Console$.prototype.YELLOW$undB__ = (function() {
  return this.YELLOW$undB__T()
});
ScalaJS.c.scala_Console$.prototype.GREEN$undB__ = (function() {
  return this.GREEN$undB__T()
});
ScalaJS.c.scala_Console$.prototype.RED$undB__ = (function() {
  return this.RED$undB__T()
});
ScalaJS.c.scala_Console$.prototype.BLACK$undB__ = (function() {
  return this.BLACK$undB__T()
});
ScalaJS.c.scala_Console$.prototype.WHITE__ = (function() {
  return this.WHITE__T()
});
ScalaJS.c.scala_Console$.prototype.CYAN__ = (function() {
  return this.CYAN__T()
});
ScalaJS.c.scala_Console$.prototype.MAGENTA__ = (function() {
  return this.MAGENTA__T()
});
ScalaJS.c.scala_Console$.prototype.BLUE__ = (function() {
  return this.BLUE__T()
});
ScalaJS.c.scala_Console$.prototype.YELLOW__ = (function() {
  return this.YELLOW__T()
});
ScalaJS.c.scala_Console$.prototype.GREEN__ = (function() {
  return this.GREEN__T()
});
ScalaJS.c.scala_Console$.prototype.RED__ = (function() {
  return this.RED__T()
});
ScalaJS.c.scala_Console$.prototype.BLACK__ = (function() {
  return this.BLACK__T()
});
/** @constructor */
ScalaJS.inheritable.scala_Console$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Console$.prototype = ScalaJS.c.scala_Console$.prototype;
ScalaJS.is.scala_Console$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Console$)))
});
ScalaJS.as.scala_Console$ = (function(obj) {
  if ((ScalaJS.is.scala_Console$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Console")
  }
});
ScalaJS.isArrayOf.scala_Console$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Console$)))
});
ScalaJS.asArrayOf.scala_Console$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Console$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Console;", depth)
  }
});
ScalaJS.data.scala_Console$ = new ScalaJS.ClassTypeData({
  scala_Console$: 0
}, false, "scala.Console$", ScalaJS.data.java_lang_Object, {
  scala_Console$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Console$.prototype.$classData = ScalaJS.data.scala_Console$;
ScalaJS.moduleInstances.scala_Console = undefined;
ScalaJS.modules.scala_Console = (function() {
  if ((!ScalaJS.moduleInstances.scala_Console)) {
    ScalaJS.moduleInstances.scala_Console = new ScalaJS.c.scala_Console$().init___()
  };
  return ScalaJS.moduleInstances.scala_Console
});
//@ sourceMappingURL=Console$.js.map

ScalaJS.impls.scala_collection_immutable_StringLike$class__apply__Lscala_collection_immutable_StringLike__I__C = (function($$this, n) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C($$this.toString__T(), n)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__length__Lscala_collection_immutable_StringLike__I = (function($$this) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__mkString__Lscala_collection_immutable_StringLike__T = (function($$this) {
  return $$this.toString__T()
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__slice__Lscala_collection_immutable_StringLike__I__I__O = (function($$this, from, until) {
  var start = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  var end = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(until), $$this.length__I());
  if ((start >= end)) {
    return $$this.newBuilder__Lscala_collection_mutable_Builder().result__O()
  } else {
    return ScalaJS.as.scala_collection_mutable_Builder($$this.newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T($$this.toString__T(), start, end))))).result__O()
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__$times__Lscala_collection_immutable_StringLike__I__T = (function($$this, n) {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), n).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, buf$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return buf$1.append__T__Lscala_collection_mutable_StringBuilder(arg$outer.toString__T())
    })
  })($$this, buf)));
  return buf.toString__T()
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__compare__Lscala_collection_immutable_StringLike__T__I = (function($$this, other) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__compareTo__Lscala_scalajs_runtime_RuntimeString__T__I($$this.toString__T(), other)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$isLineBreak__Lscala_collection_immutable_StringLike__C__Z = (function($$this, c) {
  return ((c === ScalaJS.modules.scala_collection_immutable_StringLike().scala$collection$immutable$StringLike$$LF__C()) || (c === ScalaJS.modules.scala_collection_immutable_StringLike().scala$collection$immutable$StringLike$$FF__C()))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__stripLineEnd__Lscala_collection_immutable_StringLike__T = (function($$this) {
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this.toString__T());
  if ((len === 0)) {
    return $$this.toString__T()
  } else {
    var last = $$this.apply__I__C((len - 1));
    if (ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$isLineBreak__Lscala_collection_immutable_StringLike__C__Z($$this, last)) {
      var jsx$2 = $$this.toString__T();
      if ((((last === ScalaJS.modules.scala_collection_immutable_StringLike().scala$collection$immutable$StringLike$$LF__C()) && (len >= 2)) && ($$this.apply__I__C((len - 2)) === ScalaJS.modules.scala_collection_immutable_StringLike().scala$collection$immutable$StringLike$$CR__C()))) {
        var jsx$1 = (len - 2)
      } else {
        var jsx$1 = (len - 1)
      };
      return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(jsx$2, 0, jsx$1)
    } else {
      return $$this.toString__T()
    }
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__linesWithSeparators__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_StringLike$$anon$1().init___Lscala_collection_immutable_StringLike($$this)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__lines__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator = (function($$this) {
  return $$this.linesWithSeparators__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(line) {
      return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T(line).stripLineEnd__T()
    })
  })()))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__linesIterator__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator = (function($$this) {
  return $$this.linesWithSeparators__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(line) {
      return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T(line).stripLineEnd__T()
    })
  })()))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__capitalize__Lscala_collection_immutable_StringLike__T = (function($$this) {
  if (ScalaJS.anyRefEqEq($$this.toString__T(), null)) {
    return null
  } else {
    if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this.toString__T()) === 0)) {
      return ""
    } else {
      var chars = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toCharArray__Lscala_scalajs_runtime_RuntimeString__AC($$this.toString__T());
      chars.underlying[0] = ScalaJS.modules.scala_runtime_RichChar().toUpper$extension__C__C(ScalaJS.modules.scala_Predef().charWrapper__C__C(chars.underlying[0]));
      return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().newString__AC__Lscala_scalajs_js_String(chars)
    }
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__stripPrefix__Lscala_collection_immutable_StringLike__T__T = (function($$this, prefix) {
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z($$this.toString__T(), prefix)) {
    return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T($$this.toString__T(), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(prefix))
  } else {
    return $$this.toString__T()
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__stripSuffix__Lscala_collection_immutable_StringLike__T__T = (function($$this, suffix) {
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z($$this.toString__T(), suffix)) {
    return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T($$this.toString__T(), 0, (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this.toString__T()) - ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(suffix)))
  } else {
    return $$this.toString__T()
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__replaceAllLiterally__Lscala_collection_immutable_StringLike__T__T__T = (function($$this, literal, replacement) {
  var arg1 = ScalaJS.modules.java_util_regex_Pattern().quote__T__T(literal);
  var arg2 = ScalaJS.modules.java_util_regex_Matcher().quoteReplacement__T__T(replacement);
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replaceAll__Lscala_scalajs_runtime_RuntimeString__T__T__T($$this.toString__T(), arg1, arg2)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__stripMargin__Lscala_collection_immutable_StringLike__C__T = (function($$this, marginChar) {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  $$this.linesWithSeparators__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(buf$2, marginChar$1) {
    return (function(line) {
      var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(line);
      var index = 0;
      while (((index < len) && (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(line, index) <= 32))) {
        index = (index + 1)
      };
      var jsx$4 = buf$2;
      if (((index < len) && (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(line, index) === marginChar$1))) {
        var jsx$3 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(line, (index + 1))
      } else {
        var jsx$3 = line
      };
      return jsx$4.append__T__Lscala_collection_mutable_StringBuilder(jsx$3)
    })
  })(buf, marginChar)));
  return buf.toString__T()
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__stripMargin__Lscala_collection_immutable_StringLike__T = (function($$this) {
  return $$this.stripMargin__C__T(124)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$escape__Lscala_collection_immutable_StringLike__C__T = (function($$this, ch) {
  return (("\\Q" + ScalaJS.bC(ch)) + "\\E")
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__split__Lscala_collection_immutable_StringLike__C__AT = (function($$this, separator) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT($$this.toString__T(), ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$escape__Lscala_collection_immutable_StringLike__C__T($$this, separator))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__split__Lscala_collection_immutable_StringLike__AC__AT = (function($$this, separators) {
  var re = (("" + ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(separators).foldLeft__O__Lscala_Function2__O("[", new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer) {
    return (function(x$1, x$2) {
      x$2 = ScalaJS.uC(x$2);
      return (("" + x$1) + ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$escape__Lscala_collection_immutable_StringLike__C__T(arg$outer, x$2))
    })
  })($$this))))) + "]");
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT($$this.toString__T(), re)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__r__Lscala_collection_immutable_StringLike__Lscala_util_matching_Regex = (function($$this) {
  return $$this.r__Lscala_collection_Seq__Lscala_util_matching_Regex(ScalaJS.modules.scala_collection_immutable_Nil())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__r__Lscala_collection_immutable_StringLike__Lscala_collection_Seq__Lscala_util_matching_Regex = (function($$this, groupNames) {
  return new ScalaJS.c.scala_util_matching_Regex().init___T__Lscala_collection_Seq($$this.toString__T(), groupNames)
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toBoolean__Lscala_collection_immutable_StringLike__Z = (function($$this) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__parseBoolean__Lscala_collection_immutable_StringLike__T__Z($$this, $$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toByte__Lscala_collection_immutable_StringLike__B = (function($$this) {
  return ScalaJS.modules.java_lang_Byte().parseByte__T__B($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toShort__Lscala_collection_immutable_StringLike__S = (function($$this) {
  return ScalaJS.modules.java_lang_Short().parseShort__T__S($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toInt__Lscala_collection_immutable_StringLike__I = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().parseInt__T__I($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toLong__Lscala_collection_immutable_StringLike__J = (function($$this) {
  return ScalaJS.modules.java_lang_Long().parseLong__T__J($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toFloat__Lscala_collection_immutable_StringLike__F = (function($$this) {
  return ScalaJS.modules.java_lang_Float().parseFloat__T__F($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toDouble__Lscala_collection_immutable_StringLike__D = (function($$this) {
  return ScalaJS.modules.java_lang_Double().parseDouble__T__D($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__parseBoolean__Lscala_collection_immutable_StringLike__T__Z = (function($$this, s) {
  if ((!ScalaJS.anyRefEqEq(s, null))) {
    var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(s);
    if (ScalaJS.anyRefEqEq("true", x1)) {
      return true
    };
    if (ScalaJS.anyRefEqEq("false", x1)) {
      return false
    };
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("For input string: \"" + s) + "\""))
  } else {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("For input string: \"null\"")
  }
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__toArray__Lscala_collection_immutable_StringLike__Lscala_reflect_ClassTag__O = (function($$this, evidence$1) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toCharArray__Lscala_scalajs_runtime_RuntimeString__AC($$this.toString__T())
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$unwrapArg__Lscala_collection_immutable_StringLike__O__O = (function($$this, arg) {
  var x1 = arg;
  if (ScalaJS.is.scala_math_ScalaNumber(x1)) {
    var x2 = ScalaJS.as.scala_math_ScalaNumber(x1);
    return x2.underlying__O()
  };
  return x1
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__format__Lscala_collection_immutable_StringLike__Lscala_collection_Seq__T = (function($$this, args) {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().format__T__AO__T($$this.toString__T(), ScalaJS.asArrayOf.java_lang_Object(ScalaJS.as.scala_collection_TraversableOnce(args.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(arg) {
      return ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$unwrapArg__Lscala_collection_immutable_StringLike__O__O(arg$outer, arg)
    })
  })($$this)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().AnyRef__Lscala_reflect_ClassTag()), 1))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__formatLocal__Lscala_collection_immutable_StringLike__Ljava_util_Locale__Lscala_collection_Seq__T = (function($$this, l, args) {
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().format__Ljava_util_Locale__T__AO__T(l, $$this.toString__T(), ScalaJS.asArrayOf.java_lang_Object(ScalaJS.as.scala_collection_TraversableOnce(args.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(arg) {
      return ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$unwrapArg__Lscala_collection_immutable_StringLike__O__O(arg$outer, arg)
    })
  })($$this)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().AnyRef__Lscala_reflect_ClassTag()), 1))
});
ScalaJS.impls.scala_collection_immutable_StringLike$class__$init$__Lscala_collection_immutable_StringLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=StringLike$class.js.map

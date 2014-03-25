/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModel$ = (function() {
  ScalaJS.c.scala_util_regexp_WordExp.call(this)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype = new ScalaJS.inheritable.scala_util_regexp_WordExp();
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModel$;
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.isMixed__Lscala_xml_dtd_ContentModel__Z = (function(cm) {
  return ScalaJS.modules.scala_PartialFunction().cond__O__Lscala_PartialFunction__Z(cm, new ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1().init___())
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.containsText__Lscala_xml_dtd_ContentModel__Z = (function(cm) {
  return (ScalaJS.anyRefEqEq(cm, ScalaJS.modules.scala_xml_dtd_PCDATA()) || this.isMixed__Lscala_xml_dtd_ContentModel__Z(cm))
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.parse__T__Lscala_xml_dtd_ContentModel = (function(s) {
  return ScalaJS.modules.scala_xml_dtd_ContentModelParser().parse__T__Lscala_xml_dtd_ContentModel(s)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.getLabels__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  return this.scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_util_regexp_Base$RegExp__T = (function(r) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(r$1) {
    return (function(x$1) {
      ScalaJS.modules.scala_xml_dtd_ContentModel().buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(r$1, x$1);
      return ScalaJS.bV(undefined)
    })
  })(r)))
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__p3__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__C__V = (function(rs, sb, sep) {
  this.buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_util_regexp_Base$RegExp(rs.head__O()), sb);
  ScalaJS.as.scala_collection_IterableLike(rs.tail__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(sb$1, sep$1) {
    return (function(z) {
      sb$1.append__C__Lscala_collection_mutable_StringBuilder(sep$1);
      return ScalaJS.modules.scala_xml_dtd_ContentModel().buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(z, sb$1)
    })
  })(sb, sep)))
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_xml_dtd_ContentModel__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(c, sb) {
  var x1 = c;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_ANY(), x1)) {
    return sb.append__T__Lscala_collection_mutable_StringBuilder("ANY")
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_EMPTY(), x1)) {
    return sb.append__T__Lscala_collection_mutable_StringBuilder("EMPTY")
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_PCDATA(), x1)) {
    return sb.append__T__Lscala_collection_mutable_StringBuilder("(#PCDATA)")
  };
  matchEnd16: {
    if (ScalaJS.is.scala_xml_dtd_ELEMENTS(x1)) {
      var jsx$1 = true;
      break matchEnd16
    };
    if (ScalaJS.is.scala_xml_dtd_MIXED(x1)) {
      var jsx$1 = true;
      break matchEnd16
    };
    var jsx$1 = false;
    break matchEnd16
  };
  if (jsx$1) {
    return c.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(r, sb) {
  var x1 = r;
  if (ScalaJS.anyRefEqEq(this.Eps__Lscala_util_regexp_Base$Eps$(), x1)) {
    return sb
  };
  if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
    var o16 = this.Sequ__Lscala_util_regexp_Base$Sequ$().unapplySeq__Lscala_util_regexp_Base$Sequ__Lscala_Some(x2);
    if ((!o16.isEmpty__Z())) {
      var rs = ScalaJS.as.scala_collection_Seq(o16.get__O());
      sb.append__C__Lscala_collection_mutable_StringBuilder(40);
      this.buildString__p3__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__C__V(rs, sb, 44);
      return sb.append__C__Lscala_collection_mutable_StringBuilder(41)
    }
  };
  if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
    var x4 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
    var o18 = this.Alt__Lscala_util_regexp_Base$Alt$().unapplySeq__Lscala_util_regexp_Base$Alt__Lscala_Some(x4);
    if ((!o18.isEmpty__Z())) {
      var rs$2 = ScalaJS.as.scala_collection_Seq(o18.get__O());
      sb.append__C__Lscala_collection_mutable_StringBuilder(40);
      this.buildString__p3__Lscala_collection_Seq__Lscala_collection_mutable_StringBuilder__C__V(rs$2, sb, 124);
      return sb.append__C__Lscala_collection_mutable_StringBuilder(41)
    }
  };
  if (ScalaJS.is.scala_util_regexp_Base$Star(x1)) {
    var x6 = ScalaJS.as.scala_util_regexp_Base$Star(x1);
    var r$2 = x6.r__Lscala_util_regexp_Base$RegExp();
    if ((r$2 !== null)) {
      var x10 = r$2;
      sb.append__C__Lscala_collection_mutable_StringBuilder(40);
      this.buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(x10, sb);
      return sb.append__T__Lscala_collection_mutable_StringBuilder(")*")
    }
  };
  if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
    var x8 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
    var p7 = ScalaJS.as.scala_xml_dtd_ContentModel$ElemName(x8.a__Lscala_util_regexp_WordExp$Label());
    if ((p7 !== null)) {
      var name = p7.name__T();
      return sb.append__T__Lscala_collection_mutable_StringBuilder(name)
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = r;
    if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
      var x3 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
      var p2 = ScalaJS.as.scala_xml_dtd_ContentModel$ElemName(x3.a__Lscala_util_regexp_WordExp$Label());
      if ((p2 !== null)) {
        var name = p2.name__T();
        return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), [name]), 1))))
      }
    };
    if (ScalaJS.is.scala_util_regexp_Base$Star(x1)) {
      var x4 = ScalaJS.as.scala_util_regexp_Base$Star(x1);
      var x = x4.r__Lscala_util_regexp_Base$RegExp();
      r = x;
      continue tailCallLoop
    };
    if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
      var x5 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
      var o15 = _$this.Sequ__Lscala_util_regexp_Base$Sequ$().unapplySeq__Lscala_util_regexp_Base$Sequ__Lscala_Some(x5);
      if ((!o15.isEmpty__Z())) {
        var xs = ScalaJS.as.scala_collection_Seq(o15.get__O());
        return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.as.scala_collection_Seq(xs.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
          return (function(r) {
            return ScalaJS.modules.scala_xml_dtd_ContentModel().scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
          })
        })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))))
      }
    };
    if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
      var x7 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
      var o17 = _$this.Alt__Lscala_util_regexp_Base$Alt$().unapplySeq__Lscala_util_regexp_Base$Alt__Lscala_Some(x7);
      if ((!o17.isEmpty__Z())) {
        var xs$2 = ScalaJS.as.scala_collection_Seq(o17.get__O());
        return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.as.scala_collection_Seq(xs$2.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
          return (function(r) {
            return ScalaJS.modules.scala_xml_dtd_ContentModel().scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
          })
        })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))))
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.scala$xml$dtd$ContentModel$$traverse$1__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__ = (function(r$2, sb) {
  return this.buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(r$2, sb)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_xml_dtd_ContentModel__Lscala_collection_mutable_StringBuilder__ = (function(c, sb$2) {
  return this.buildString__Lscala_xml_dtd_ContentModel__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(c, sb$2)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.buildString__Lscala_util_regexp_Base$RegExp__ = (function(r$3) {
  return this.buildString__Lscala_util_regexp_Base$RegExp__T(r$3)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.getLabels__Lscala_util_regexp_Base$RegExp__ = (function(r$4) {
  return this.getLabels__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r$4)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.parse__T__ = (function(s) {
  return this.parse__T__Lscala_xml_dtd_ContentModel(s)
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.containsText__Lscala_xml_dtd_ContentModel__ = (function(cm) {
  return ScalaJS.bZ(this.containsText__Lscala_xml_dtd_ContentModel__Z(cm))
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.isMixed__Lscala_xml_dtd_ContentModel__ = (function(cm$2) {
  return ScalaJS.bZ(this.isMixed__Lscala_xml_dtd_ContentModel__Z(cm$2))
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModel$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModel$.prototype = ScalaJS.c.scala_xml_dtd_ContentModel$.prototype;
ScalaJS.is.scala_xml_dtd_ContentModel$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModel$)))
});
ScalaJS.as.scala_xml_dtd_ContentModel$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModel$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModel")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModel$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModel$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModel;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModel$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModel$: 0
}, false, "scala.xml.dtd.ContentModel$", ScalaJS.data.scala_util_regexp_WordExp, {
  scala_xml_dtd_ContentModel$: 1,
  scala_util_regexp_WordExp: 1,
  scala_util_regexp_Base: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModel$;
ScalaJS.moduleInstances.scala_xml_dtd_ContentModel = undefined;
ScalaJS.modules.scala_xml_dtd_ContentModel = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ContentModel)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ContentModel = new ScalaJS.c.scala_xml_dtd_ContentModel$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ContentModel
});
//@ sourceMappingURL=ContentModel$.js.map

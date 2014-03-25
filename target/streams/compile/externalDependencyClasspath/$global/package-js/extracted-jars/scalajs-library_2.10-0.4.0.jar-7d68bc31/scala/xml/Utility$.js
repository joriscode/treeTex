/** @constructor */
ScalaJS.c.scala_xml_Utility$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.SU$1 = 0
});
ScalaJS.c.scala_xml_Utility$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Utility$.prototype.constructor = ScalaJS.c.scala_xml_Utility$;
ScalaJS.c.scala_xml_Utility$.prototype.isSpace__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_Utility$.prototype.isSpace__Lscala_collection_Seq__Z = (function(cs) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, cs)
});
ScalaJS.c.scala_xml_Utility$.prototype.isAlpha__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlpha__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_Utility$.prototype.isAlphaDigit__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlphaDigit__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_Utility$.prototype.isNameChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_Utility$.prototype.isNameStart__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameStart__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_Utility$.prototype.isName__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isName__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_Utility$.prototype.isPubIDChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isPubIDChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_Utility$.prototype.isValidIANAEncoding__Lscala_collection_Seq__Z = (function(ianaEncoding) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isValidIANAEncoding__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, ianaEncoding)
});
ScalaJS.c.scala_xml_Utility$.prototype.checkSysID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkSysID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_Utility$.prototype.checkPubID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkPubID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_Utility$.prototype.SU__C = (function() {
  return 26
});
ScalaJS.c.scala_xml_Utility$.prototype.implicitSbToString__Lscala_collection_mutable_StringBuilder__T = (function(sb) {
  return sb.toString__T()
});
ScalaJS.c.scala_xml_Utility$.prototype.sbToString__Lscala_Function1__T = (function(f) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  f.apply__O__O(sb);
  return sb.toString__T()
});
ScalaJS.c.scala_xml_Utility$.prototype.isAtomAndNotText__Lscala_xml_Node__Z = (function(x) {
  return (x.isAtom__Z() && (!ScalaJS.is.scala_xml_Text(x)))
});
ScalaJS.c.scala_xml_Utility$.prototype.trim__Lscala_xml_Node__Lscala_xml_Node = (function(x) {
  var x1 = x;
  var o7 = ScalaJS.modules.scala_xml_Elem().unapplySeq__Lscala_xml_Node__Lscala_Option(x1);
  if ((!o7.isEmpty__Z())) {
    var pre = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und1__O());
    var lab = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und2__O());
    var md = ScalaJS.as.scala_xml_MetaData(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und3__O());
    var scp = ScalaJS.as.scala_xml_NamespaceBinding(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und4__O());
    var child = ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und5__O());
    return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, lab, md, scp, ScalaJS.as.scala_collection_Seq(child.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x) {
        return ScalaJS.modules.scala_xml_Utility().trimProper__Lscala_xml_Node__Lscala_collection_Seq(x)
      })
    })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_Utility$.prototype.trimProper__Lscala_xml_Node__Lscala_collection_Seq = (function(x) {
  var x1 = x;
  var o8 = ScalaJS.modules.scala_xml_Elem().unapplySeq__Lscala_xml_Node__Lscala_Option(ScalaJS.as.scala_xml_Node(x1));
  if ((!o8.isEmpty__Z())) {
    var pre = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o8.get__O()).$$und1__O());
    var lab = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o8.get__O()).$$und2__O());
    var md = ScalaJS.as.scala_xml_MetaData(ScalaJS.as.scala_Tuple5(o8.get__O()).$$und3__O());
    var scp = ScalaJS.as.scala_xml_NamespaceBinding(ScalaJS.as.scala_Tuple5(o8.get__O()).$$und4__O());
    var child = ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_Tuple5(o8.get__O()).$$und5__O());
    return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, lab, md, scp, ScalaJS.as.scala_collection_Seq(child.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x) {
        return ScalaJS.modules.scala_xml_Utility().trimProper__Lscala_xml_Node__Lscala_collection_Seq(x)
      })
    })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
  };
  var o10 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1);
  if ((!o10.isEmpty__Z())) {
    var s = ScalaJS.as.java_lang_String(o10.get__O());
    return new ScalaJS.c.scala_xml_TextBuffer().init___().append__Lscala_collection_Seq__Lscala_xml_TextBuffer(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString(s)).toText__Lscala_collection_Seq()
  };
  return x
});
ScalaJS.c.scala_xml_Utility$.prototype.sort__Lscala_xml_MetaData__Lscala_xml_MetaData = (function(md) {
  if (((md === ScalaJS.modules.scala_xml_Null()) || (md.next__Lscala_xml_MetaData() === ScalaJS.modules.scala_xml_Null()))) {
    return md
  } else {
    var key = md.key__T();
    var smaller = this.sort__Lscala_xml_MetaData__Lscala_xml_MetaData(md.filter__Lscala_Function1__Lscala_xml_MetaData(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
      return (function(m) {
        return ScalaJS.bZ(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(m.key__T())).$$less__O__Z(key$1))
      })
    })(key))));
    var greater = this.sort__Lscala_xml_MetaData__Lscala_xml_MetaData(md.filter__Lscala_Function1__Lscala_xml_MetaData(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
      return (function(m) {
        return ScalaJS.bZ(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(m.key__T())).$$greater__O__Z(key$1))
      })
    })(key))));
    return ScalaJS.as.scala_xml_MetaData(smaller.foldRight__O__Lscala_Function2__O(md.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(greater), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
      return (function(x, xs) {
        return x.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(xs)
      })
    })())))
  }
});
ScalaJS.c.scala_xml_Utility$.prototype.sort__Lscala_xml_Node__Lscala_xml_Node = (function(n) {
  var x1 = n;
  var o7 = ScalaJS.modules.scala_xml_Elem().unapplySeq__Lscala_xml_Node__Lscala_Option(x1);
  if ((!o7.isEmpty__Z())) {
    var pre = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und1__O());
    var lab = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und2__O());
    var md = ScalaJS.as.scala_xml_MetaData(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und3__O());
    var scp = ScalaJS.as.scala_xml_NamespaceBinding(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und4__O());
    var child = ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_Tuple5(o7.get__O()).$$und5__O());
    return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, lab, this.sort__Lscala_xml_MetaData__Lscala_xml_MetaData(md), scp, ScalaJS.as.scala_collection_Seq(child.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(n) {
        return ScalaJS.modules.scala_xml_Utility().sort__Lscala_xml_Node__Lscala_xml_Node(n)
      })
    })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))
  };
  return n
});
ScalaJS.c.scala_xml_Utility$.prototype.escape__T__T = (function(text) {
  return this.sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(text$1) {
    return (function(x$1) {
      ScalaJS.modules.scala_xml_Utility().escape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(text$1, x$1);
      return ScalaJS.bV(undefined)
    })
  })(text)))
});
ScalaJS.c.scala_xml_Utility$.prototype.escape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(text, s) {
  var len = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(text);
  var pos = 0;
  while ((pos < len)) {
    var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(text, pos);
    switch (x1) {
      case 60:
        {
          s.append__T__Lscala_collection_mutable_StringBuilder("&lt;");
          break
        };
      case 62:
        {
          s.append__T__Lscala_collection_mutable_StringBuilder("&gt;");
          break
        };
      case 38:
        {
          s.append__T__Lscala_collection_mutable_StringBuilder("&amp;");
          break
        };
      case 34:
        {
          s.append__T__Lscala_collection_mutable_StringBuilder("&quot;");
          break
        };
      case 10:
        {
          s.append__C__Lscala_collection_mutable_StringBuilder(10);
          break
        };
      case 13:
        {
          s.append__C__Lscala_collection_mutable_StringBuilder(13);
          break
        };
      case 9:
        {
          s.append__C__Lscala_collection_mutable_StringBuilder(9);
          break
        };
      default:
        if ((x1 >= 32)) {
          s.append__C__Lscala_collection_mutable_StringBuilder(x1)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
    };
    pos = (pos + 1)
  };
  return s
});
ScalaJS.c.scala_xml_Utility$.prototype.unescape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(ref, s) {
  return ScalaJS.as.scala_collection_mutable_StringBuilder(ScalaJS.modules.scala_xml_Utility$Escapes().unescMap__Lscala_collection_immutable_Map().get__O__Lscala_Option(ref).map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(s$2) {
    return (function(x$2) {
      x$2 = ScalaJS.uC(x$2);
      return s$2.append__C__Lscala_collection_mutable_StringBuilder(x$2)
    })
  })(s))).orNull__Lscala_Predef$$less$colon$less__O(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less()))
});
ScalaJS.c.scala_xml_Utility$.prototype.collectNamespaces__Lscala_collection_Seq__Lscala_collection_mutable_Set = (function(nodes) {
  return ScalaJS.as.scala_collection_mutable_Set(nodes.foldLeft__O__Lscala_Function2__O(new ScalaJS.c.scala_collection_mutable_HashSet().init___(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(set, x) {
      ScalaJS.modules.scala_xml_Utility().collectNamespaces__Lscala_xml_Node__Lscala_collection_mutable_Set__V(x, set);
      return set
    })
  })())))
});
ScalaJS.c.scala_xml_Utility$.prototype.collectNamespaces__Lscala_xml_Node__Lscala_collection_mutable_Set__V = (function(n, set) {
  if (n.doCollectNamespaces__Z()) {
    set.$$plus$eq__O__Lscala_collection_mutable_SetLike(n.namespace__T());
    n.attributes__Lscala_xml_MetaData().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(n$1, set$1) {
      return (function(a) {
        var x1 = a;
        if (ScalaJS.is.scala_xml_PrefixedAttribute(x1)) {
          return set$1.$$plus$eq__O__Lscala_collection_mutable_SetLike(a.getNamespace__Lscala_xml_Node__T(n$1))
        };
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      })
    })(n, set)));
    n.child__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(set$1) {
      return (function(i) {
        ScalaJS.modules.scala_xml_Utility().collectNamespaces__Lscala_xml_Node__Lscala_collection_mutable_Set__V(i, set$1);
        return ScalaJS.bV(undefined)
      })
    })(set)))
  }
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__Lscala_collection_mutable_StringBuilder = (function(x, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  var jsx$7 = x;
  var jsx$6 = pscope;
  var jsx$5 = sb;
  var jsx$4 = stripComments;
  var jsx$3 = decodeEntities;
  var jsx$2 = preserveWhitespace;
  if (minimizeTags) {
    var jsx$1 = ScalaJS.modules.scala_xml_MinimizeMode().Always__Lscala_Enumeration$Value()
  } else {
    var jsx$1 = ScalaJS.modules.scala_xml_MinimizeMode().Never__Lscala_Enumeration$Value()
  };
  return this.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(jsx$7, jsx$6, jsx$5, jsx$4, jsx$3, jsx$2, jsx$1)
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$3__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$5__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$6__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML$default$7__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder = (function(x, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  var x1 = x;
  if (ScalaJS.is.scala_xml_Comment(x1)) {
    var x2 = ScalaJS.as.scala_xml_Comment(x1);
    if ((!stripComments)) {
      return x2.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
    }
  };
  if (ScalaJS.is.scala_xml_SpecialNode(x1)) {
    var x3 = ScalaJS.as.scala_xml_SpecialNode(x1);
    return x3.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
  };
  if (ScalaJS.is.scala_xml_Group(x1)) {
    var x4 = ScalaJS.as.scala_xml_Group(x1);
    x4.nodes__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(sb$2, minimizeTags$2, x4$1) {
      return (function(c) {
        var x$8 = c;
        var x$9 = x4$1.scope__Lscala_xml_NamespaceBinding();
        var x$10 = sb$2;
        var x$11 = minimizeTags$2;
        var x$12 = ScalaJS.modules.scala_xml_Utility().serialize$default$4__Z();
        var x$13 = ScalaJS.modules.scala_xml_Utility().serialize$default$5__Z();
        var x$14 = ScalaJS.modules.scala_xml_Utility().serialize$default$6__Z();
        return ScalaJS.modules.scala_xml_Utility().serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x$8, x$9, x$10, x$12, x$13, x$14, x$11)
      })
    })(sb, minimizeTags, x4)));
    return sb
  };
  if (ScalaJS.is.scala_xml_Elem(x1)) {
    var x5 = ScalaJS.as.scala_xml_Elem(x1);
    sb.append__C__Lscala_collection_mutable_StringBuilder(60);
    x5.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
    if ((x5.attributes__Lscala_xml_MetaData() !== null)) {
      x5.attributes__Lscala_xml_MetaData().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    x5.scope__Lscala_xml_NamespaceBinding().buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(sb, pscope);
    if ((x5.child__Lscala_collection_Seq().isEmpty__Z() && (ScalaJS.anyRefEqEq(minimizeTags, ScalaJS.modules.scala_xml_MinimizeMode().Always__Lscala_Enumeration$Value()) || (ScalaJS.anyRefEqEq(minimizeTags, ScalaJS.modules.scala_xml_MinimizeMode().Default__Lscala_Enumeration$Value()) && x5.minimizeEmpty__Z())))) {
      return sb.append__T__Lscala_collection_mutable_StringBuilder("/>")
    } else {
      sb.append__C__Lscala_collection_mutable_StringBuilder(62);
      this.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__V(x5.child__Lscala_collection_Seq(), x5.scope__Lscala_xml_NamespaceBinding(), sb, stripComments, this.sequenceToXML$default$5__Z(), this.sequenceToXML$default$6__Z(), this.sequenceToXML$default$7__Lscala_Enumeration$Value());
      sb.append__T__Lscala_collection_mutable_StringBuilder("</");
      x5.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      return sb.append__C__Lscala_collection_mutable_StringBuilder(62)
    }
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("Don't know how to serialize a " + ScalaJS.objectGetClass(x).getName__T()))
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$3__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$5__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$6__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize$default$7__Lscala_Enumeration$Value = (function() {
  return ScalaJS.modules.scala_xml_MinimizeMode().Default__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__V = (function(children, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  if (children.isEmpty__Z()) {
    return undefined
  } else {
    if (children.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x) {
        return ScalaJS.bZ(ScalaJS.modules.scala_xml_Utility().isAtomAndNotText__Lscala_xml_Node__Z(x))
      })
    })()))) {
      var it = children.iterator__Lscala_collection_Iterator();
      var f = ScalaJS.as.scala_xml_Node(it.next__O());
      this.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(f, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags);
      while (it.hasNext__Z()) {
        var x = ScalaJS.as.scala_xml_Node(it.next__O());
        sb.append__C__Lscala_collection_mutable_StringBuilder(32);
        this.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)
      }
    } else {
      children.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pscope$1, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1) {
        return (function(x$3) {
          return ScalaJS.modules.scala_xml_Utility().serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x$3, pscope$1, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1)
        })
      })(pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)))
    }
  }
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$3__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$5__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$6__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML$default$7__Lscala_Enumeration$Value = (function() {
  return ScalaJS.modules.scala_xml_MinimizeMode().Default__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_xml_Utility$.prototype.prefix__T__Lscala_Option = (function(name) {
  var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(name, 58);
  switch (x1) {
    case -1:
      {
        return ScalaJS.modules.scala_None();
        break
      };
    default:
      return new ScalaJS.c.scala_Some().init___O(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(name, 0, x1));
  }
});
ScalaJS.c.scala_xml_Utility$.prototype.hashCode__T__T__I__I__Lscala_collection_Seq__I = (function(pre, label, attribHashCode, scpeHash, children) {
  var jsx$14 = ScalaJS.modules.scala_util_hashing_MurmurHash3();
  var x$6 = label;
  var x$5 = attribHashCode;
  var x$4 = scpeHash;
  var jsx$13 = children.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.bI(x$4), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom());
  var jsx$12 = ScalaJS.as.scala_collection_SeqLike(jsx$13);
  var jsx$11 = jsx$12.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.bI(x$5), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom());
  var jsx$10 = ScalaJS.as.scala_collection_SeqLike(jsx$11);
  var jsx$9 = jsx$10.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(x$6, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom());
  var jsx$8 = ScalaJS.as.scala_collection_TraversableOnce(jsx$9);
  return jsx$14.orderedHash__Lscala_collection_TraversableOnce__I__I(jsx$8, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(pre))
});
ScalaJS.c.scala_xml_Utility$.prototype.appendQuoted__T__T = (function(s) {
  return this.sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(s$1) {
    return (function(x$7) {
      ScalaJS.modules.scala_xml_Utility().appendQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(s$1, x$7);
      return ScalaJS.bV(undefined)
    })
  })(s)))
});
ScalaJS.c.scala_xml_Utility$.prototype.appendQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(s, sb) {
  if (new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).contains__O__Z(ScalaJS.bC(34))) {
    var ch = 39
  } else {
    var ch = 34
  };
  return sb.append__C__Lscala_collection_mutable_StringBuilder(ch).append__T__Lscala_collection_mutable_StringBuilder(s).append__C__Lscala_collection_mutable_StringBuilder(ch)
});
ScalaJS.c.scala_xml_Utility$.prototype.appendEscapedQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(s, sb) {
  sb.append__C__Lscala_collection_mutable_StringBuilder(34);
  new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(sb$3) {
    return (function(c) {
      c = ScalaJS.uC(c);
      var x1 = c;
      switch (x1) {
        case 34:
          {
            sb$3.append__C__Lscala_collection_mutable_StringBuilder(92);
            return sb$3.append__C__Lscala_collection_mutable_StringBuilder(34);
            break
          };
        default:
          return sb$3.append__C__Lscala_collection_mutable_StringBuilder(c);
      }
    })
  })(sb)));
  return sb.append__C__Lscala_collection_mutable_StringBuilder(34)
});
ScalaJS.c.scala_xml_Utility$.prototype.getName__T__I__T = (function(s, index) {
  if ((index >= ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    return null
  } else {
    var xs = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).drop__I__O(index));
    if ((new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(xs)).nonEmpty__Z() && this.isNameStart__C__Z(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(xs)).head__O())))) {
      return ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(xs)).takeWhile__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
        return (function(ch) {
          ch = ScalaJS.uC(ch);
          return ScalaJS.bZ(ScalaJS.modules.scala_xml_Utility().isNameChar__C__Z(ch))
        })
      })())))
    } else {
      return ""
    }
  }
});
ScalaJS.c.scala_xml_Utility$.prototype.checkAttributeValue__T__T = (function(value) {
  var i = 0;
  while ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(value))) {
    var x1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(value, i);
    switch (x1) {
      case 60:
        {
          return "< not allowed in attribute value";
          break
        };
      case 38:
        {
          var n = this.getName__T__I__T(value, (i + 1));
          if ((n === null)) {
            return (("malformed entity reference in attribute value [" + value) + "]")
          };
          i = ((i + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(n)) + 1);
          if (((i >= ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(value)) || (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(value, i) !== 59))) {
            return (("malformed entity reference in attribute value [" + value) + "]")
          };
          break
        };
      default:
        /*<skip>*/;
    };
    i = (i + 1)
  };
  return null
});
ScalaJS.c.scala_xml_Utility$.prototype.parseAttributeValue__T__Lscala_collection_Seq = (function(value) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var rfb = null;
  var nb = new ScalaJS.c.scala_xml_NodeBuffer().init___();
  var it = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(value)).iterator__Lscala_collection_Iterator();
  while (it.hasNext__Z()) {
    var c = new ScalaJS.c.scala_runtime_CharRef().init___C(ScalaJS.uC(it.next__O()));
    if ((c.elem$1 === 38)) {
      c.elem$1 = ScalaJS.uC(it.next__O());
      if ((c.elem$1 === 35)) {
        c.elem$1 = ScalaJS.uC(it.next__O());
        var theChar = this.parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(c$1) {
          return (function() {
            return ScalaJS.bC(c$1.elem$1)
          })
        })(c)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(it$1, c$1) {
          return (function() {
            c$1.elem$1 = ScalaJS.uC(it$1.next__O());
            return ScalaJS.bV(undefined)
          })
        })(it, c)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
          return (function(s) {
            throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_RuntimeException().init___T(s))
          })
        })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
          return (function(s) {
            throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_RuntimeException().init___T(s))
          })
        })()));
        sb.append__T__Lscala_collection_mutable_StringBuilder(theChar)
      } else {
        if ((rfb === null)) {
          rfb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
        };
        rfb.append__C__Lscala_collection_mutable_StringBuilder(c.elem$1);
        c.elem$1 = ScalaJS.uC(it.next__O());
        while ((c.elem$1 !== 59)) {
          rfb.append__C__Lscala_collection_mutable_StringBuilder(c.elem$1);
          c.elem$1 = ScalaJS.uC(it.next__O())
        };
        var ref = rfb.toString__T();
        rfb.clear__V();
        var x1 = this.unescape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ref, sb);
        matchEnd4: {
          if (ScalaJS.anyRefEqEq(null, x1)) {
            if ((sb.length__I() > 0)) {
              nb.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(sb.toString__T()));
              sb.clear__V()
            };
            nb.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(new ScalaJS.c.scala_xml_EntityRef().init___T(ref));
            break matchEnd4
          };
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd4
        }
      }
    } else {
      sb.append__C__Lscala_collection_mutable_StringBuilder(c.elem$1)
    }
  };
  if ((sb.length__I() > 0)) {
    var x = ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(sb.toString__T());
    if ((nb.length__I() === 0)) {
      return x
    } else {
      nb.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(x)
    }
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return nb
});
ScalaJS.c.scala_xml_Utility$.prototype.parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__T = (function(ch, nextch, reportSyntaxError, reportTruncatedError) {
  if ((ch.apply$mcC$sp__C() === 120)) {
    nextch.apply$mcV$sp__V();
    var hex = true
  } else {
    var hex = false
  };
  if (hex) {
    var base = 16
  } else {
    var base = 10
  };
  var i = 0;
  while ((ch.apply$mcC$sp__C() !== 59)) {
    var x1 = ch.apply$mcC$sp__C();
    switch (x1) {
      case 48:
        /*<skip>*/;
      case 49:
        /*<skip>*/;
      case 50:
        /*<skip>*/;
      case 51:
        /*<skip>*/;
      case 52:
        /*<skip>*/;
      case 53:
        /*<skip>*/;
      case 54:
        /*<skip>*/;
      case 55:
        /*<skip>*/;
      case 56:
        /*<skip>*/;
      case 57:
        {
          i = ((i * base) + ScalaJS.modules.scala_runtime_RichChar().asDigit$extension__C__I(ScalaJS.modules.scala_Predef().charWrapper__C__C(ch.apply$mcC$sp__C())));
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break
        };
      case 97:
        /*<skip>*/;
      case 98:
        /*<skip>*/;
      case 99:
        /*<skip>*/;
      case 100:
        /*<skip>*/;
      case 101:
        /*<skip>*/;
      case 102:
        /*<skip>*/;
      case 65:
        /*<skip>*/;
      case 66:
        /*<skip>*/;
      case 67:
        /*<skip>*/;
      case 68:
        /*<skip>*/;
      case 69:
        /*<skip>*/;
      case 70:
        {
          if ((!hex)) {
            reportSyntaxError.apply__O__O("hex char not allowed in decimal char ref\nDid you mean to write &#x ?")
          } else {
            i = ((i * base) + ScalaJS.modules.scala_runtime_RichChar().asDigit$extension__C__I(ScalaJS.modules.scala_Predef().charWrapper__C__C(ch.apply$mcC$sp__C())));
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          };
          break
        };
      case 26:
        {
          reportTruncatedError.apply__O__O("");
          break
        };
      default:
        reportSyntaxError.apply__O__O((("character '" + ScalaJS.bC(ch.apply$mcC$sp__C())) + "' not allowed in char ref\n"));
    };
    nextch.apply$mcV$sp__V()
  };
  return ScalaJS.modules.scala_scalajs_runtime_RuntimeString().newString__AI__I__I__Lscala_scalajs_js_String(ScalaJS.modules.scala_Array().apply__I__Lscala_collection_Seq__AI(i, ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), []))), 0, 1)
});
ScalaJS.c.scala_xml_Utility$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_Utility = this;
  ScalaJS.impls.scala_xml_parsing_TokenTests$class__$init$__Lscala_xml_parsing_TokenTests__V(this);
  return this
});
ScalaJS.c.scala_xml_Utility$.prototype.checkPubID__T__ = (function(s) {
  return ScalaJS.bZ(this.checkPubID__T__Z(s))
});
ScalaJS.c.scala_xml_Utility$.prototype.checkSysID__T__ = (function(s$2) {
  return ScalaJS.bZ(this.checkSysID__T__Z(s$2))
});
ScalaJS.c.scala_xml_Utility$.prototype.isValidIANAEncoding__Lscala_collection_Seq__ = (function(ianaEncoding) {
  return ScalaJS.bZ(this.isValidIANAEncoding__Lscala_collection_Seq__Z(ianaEncoding))
});
ScalaJS.c.scala_xml_Utility$.prototype.isPubIDChar__C__ = (function(ch) {
  return ScalaJS.bZ(this.isPubIDChar__C__Z(ch))
});
ScalaJS.c.scala_xml_Utility$.prototype.isName__T__ = (function(s$3) {
  return ScalaJS.bZ(this.isName__T__Z(s$3))
});
ScalaJS.c.scala_xml_Utility$.prototype.isNameStart__C__ = (function(ch$2) {
  return ScalaJS.bZ(this.isNameStart__C__Z(ch$2))
});
ScalaJS.c.scala_xml_Utility$.prototype.isNameChar__C__ = (function(ch$3) {
  return ScalaJS.bZ(this.isNameChar__C__Z(ch$3))
});
ScalaJS.c.scala_xml_Utility$.prototype.isAlphaDigit__C__ = (function(c) {
  return ScalaJS.bZ(this.isAlphaDigit__C__Z(c))
});
ScalaJS.c.scala_xml_Utility$.prototype.isAlpha__C__ = (function(c$2) {
  return ScalaJS.bZ(this.isAlpha__C__Z(c$2))
});
ScalaJS.c.scala_xml_Utility$.prototype.isSpace__Lscala_collection_Seq__ = (function(cs) {
  return ScalaJS.bZ(this.isSpace__Lscala_collection_Seq__Z(cs))
});
ScalaJS.c.scala_xml_Utility$.prototype.isSpace__C__ = (function(ch$4) {
  return ScalaJS.bZ(this.isSpace__C__Z(ch$4))
});
ScalaJS.c.scala_xml_Utility$.prototype.parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__ = (function(ch$5, nextch, reportSyntaxError, reportTruncatedError) {
  return this.parseCharRef__Lscala_Function0__Lscala_Function0__Lscala_Function1__Lscala_Function1__T(ch$5, nextch, reportSyntaxError, reportTruncatedError)
});
ScalaJS.c.scala_xml_Utility$.prototype.parseAttributeValue__T__ = (function(value) {
  return this.parseAttributeValue__T__Lscala_collection_Seq(value)
});
ScalaJS.c.scala_xml_Utility$.prototype.checkAttributeValue__T__ = (function(value$2) {
  return this.checkAttributeValue__T__T(value$2)
});
ScalaJS.c.scala_xml_Utility$.prototype.getName__T__I__ = (function(s$4, index) {
  return this.getName__T__I__T(s$4, index)
});
ScalaJS.c.scala_xml_Utility$.prototype.appendEscapedQuoted__T__Lscala_collection_mutable_StringBuilder__ = (function(s$5, sb) {
  return this.appendEscapedQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(s$5, sb)
});
ScalaJS.c.scala_xml_Utility$.prototype.appendQuoted__T__Lscala_collection_mutable_StringBuilder__ = (function(s$6, sb$2) {
  return this.appendQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(s$6, sb$2)
});
ScalaJS.c.scala_xml_Utility$.prototype.appendQuoted__T__ = (function(s$7) {
  return this.appendQuoted__T__T(s$7)
});
ScalaJS.c.scala_xml_Utility$.prototype.hashCode__T__T__I__I__Lscala_collection_Seq__ = (function(pre, label, attribHashCode, scpeHash, children) {
  return ScalaJS.bI(this.hashCode__T__T__I__I__Lscala_collection_Seq__I(pre, label, attribHashCode, scpeHash, children))
});
ScalaJS.c.scala_xml_Utility$.prototype.prefix__T__ = (function(name) {
  return this.prefix__T__Lscala_Option(name)
});
ScalaJS.c.scala_xml_Utility$.prototype.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__ = (function(children$2, pscope, sb$3, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  return ScalaJS.bV(this.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__V(children$2, pscope, sb$3, stripComments, decodeEntities, preserveWhitespace, minimizeTags))
});
ScalaJS.c.scala_xml_Utility$.prototype.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__ = (function(x, pscope$2, sb$4, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2) {
  return this.serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x, pscope$2, sb$4, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2)
});
ScalaJS.c.scala_xml_Utility$.prototype.toXML__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__ = (function(x$2, pscope$3, sb$5, stripComments$3, decodeEntities$3, preserveWhitespace$3, minimizeTags$3) {
  return this.toXML__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__Lscala_collection_mutable_StringBuilder(x$2, pscope$3, sb$5, stripComments$3, decodeEntities$3, preserveWhitespace$3, minimizeTags$3)
});
ScalaJS.c.scala_xml_Utility$.prototype.collectNamespaces__Lscala_xml_Node__Lscala_collection_mutable_Set__ = (function(n, set) {
  return ScalaJS.bV(this.collectNamespaces__Lscala_xml_Node__Lscala_collection_mutable_Set__V(n, set))
});
ScalaJS.c.scala_xml_Utility$.prototype.collectNamespaces__Lscala_collection_Seq__ = (function(nodes) {
  return this.collectNamespaces__Lscala_collection_Seq__Lscala_collection_mutable_Set(nodes)
});
ScalaJS.c.scala_xml_Utility$.prototype.unescape__T__Lscala_collection_mutable_StringBuilder__ = (function(ref, s$8) {
  return this.unescape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ref, s$8)
});
ScalaJS.c.scala_xml_Utility$.prototype.escape__T__Lscala_collection_mutable_StringBuilder__ = (function(text, s$9) {
  return this.escape__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(text, s$9)
});
ScalaJS.c.scala_xml_Utility$.prototype.escape__T__ = (function(text$2) {
  return this.escape__T__T(text$2)
});
ScalaJS.c.scala_xml_Utility$.prototype.sort__Lscala_xml_Node__ = (function(n$2) {
  return this.sort__Lscala_xml_Node__Lscala_xml_Node(n$2)
});
ScalaJS.c.scala_xml_Utility$.prototype.sort__Lscala_xml_MetaData__ = (function(md) {
  return this.sort__Lscala_xml_MetaData__Lscala_xml_MetaData(md)
});
ScalaJS.c.scala_xml_Utility$.prototype.trimProper__Lscala_xml_Node__ = (function(x$3) {
  return this.trimProper__Lscala_xml_Node__Lscala_collection_Seq(x$3)
});
ScalaJS.c.scala_xml_Utility$.prototype.trim__Lscala_xml_Node__ = (function(x$4) {
  return this.trim__Lscala_xml_Node__Lscala_xml_Node(x$4)
});
ScalaJS.c.scala_xml_Utility$.prototype.isAtomAndNotText__Lscala_xml_Node__ = (function(x$5) {
  return ScalaJS.bZ(this.isAtomAndNotText__Lscala_xml_Node__Z(x$5))
});
ScalaJS.c.scala_xml_Utility$.prototype.sbToString__Lscala_Function1__ = (function(f) {
  return this.sbToString__Lscala_Function1__T(f)
});
ScalaJS.c.scala_xml_Utility$.prototype.implicitSbToString__Lscala_collection_mutable_StringBuilder__ = (function(sb$6) {
  return this.implicitSbToString__Lscala_collection_mutable_StringBuilder__T(sb$6)
});
ScalaJS.c.scala_xml_Utility$.prototype.SU__ = (function() {
  return ScalaJS.bC(this.SU__C())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Utility$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Utility$.prototype = ScalaJS.c.scala_xml_Utility$.prototype;
ScalaJS.is.scala_xml_Utility$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Utility$)))
});
ScalaJS.as.scala_xml_Utility$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Utility$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Utility")
  }
});
ScalaJS.isArrayOf.scala_xml_Utility$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Utility$)))
});
ScalaJS.asArrayOf.scala_xml_Utility$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Utility$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Utility;", depth)
  }
});
ScalaJS.data.scala_xml_Utility$ = new ScalaJS.ClassTypeData({
  scala_xml_Utility$: 0
}, false, "scala.xml.Utility$", ScalaJS.data.java_lang_Object, {
  scala_xml_Utility$: 1,
  scala_xml_parsing_TokenTests: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Utility$.prototype.$classData = ScalaJS.data.scala_xml_Utility$;
ScalaJS.moduleInstances.scala_xml_Utility = undefined;
ScalaJS.modules.scala_xml_Utility = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Utility)) {
    ScalaJS.moduleInstances.scala_xml_Utility = new ScalaJS.c.scala_xml_Utility$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Utility
});
//@ sourceMappingURL=Utility$.js.map

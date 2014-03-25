ScalaJS.impls.scala_xml_parsing_MarkupParser$class__truncatedError__Lscala_xml_parsing_MarkupHandler__T__Lscala_Nothing = (function($$this, msg) {
  throw new ScalaJS.c.scala_xml_parsing_FatalError().init___T(msg)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__errorNoEnd__Lscala_xml_parsing_MarkupHandler__T__Lscala_Nothing = (function($$this, tag) {
  throw new ScalaJS.c.scala_xml_parsing_FatalError().init___T(("expected closing tag of " + tag))
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xHandleError__Lscala_xml_parsing_MarkupHandler__C__T__V = (function($$this, that, msg) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V(msg)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__lookahead__Lscala_xml_parsing_MarkupHandler__Lscala_collection_BufferedIterator = (function($$this) {
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
  if (ScalaJS.is.scala_xml_parsing_MarkupParser$WithLookAhead(x1)) {
    var x2 = ScalaJS.as.scala_xml_parsing_MarkupParser$WithLookAhead(x1);
    return x2.lookahead__Lscala_collection_BufferedIterator()
  };
  var newInput = new ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead().init___Lscala_xml_parsing_MarkupHandler__Lscala_io_Source($$this, ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput$und$eq__Lscala_io_Source__V(newInput);
  return newInput.lookahead__Lscala_collection_BufferedIterator()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__ch__Lscala_xml_parsing_MarkupHandler__C = (function($$this) {
  if (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextChNeeded__Z()) {
    if (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source().hasNext__Z()) {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).lastChRead$und$eq__C__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source().next__C());
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos$und$eq__I__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source().pos__I())
    } else {
      var ilen = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().length__I();
      if (((ilen !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extIndex__I()) && (ilen > 0))) {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pop__V()
      } else {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reachedEof$und$eq__Z__V(true);
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).lastChRead$und$eq__C__V((0 & 65535))
      }
    };
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextChNeeded$und$eq__Z__V(false)
  };
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).lastChRead__C()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__eof__Lscala_xml_parsing_MarkupHandler__Z = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reachedEof__Z()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xmlProcInstr__Lscala_xml_parsing_MarkupHandler__Lscala_xml_MetaData = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("xml"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xAttributes__Lscala_xml_NamespaceBinding__Lscala_Tuple2(ScalaJS.modules.scala_xml_TopScope());
  matchEnd3: {
    if ((x1 !== null)) {
      var md = ScalaJS.as.scala_xml_MetaData(x1.$$und1__O());
      var scp = ScalaJS.as.scala_xml_NamespaceBinding(x1.$$und2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(md, scp);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var md$2 = ScalaJS.as.scala_xml_MetaData(x$1.$$und1__O());
  var scp$2 = ScalaJS.as.scala_xml_NamespaceBinding(x$1.$$und2__O());
  if ((!ScalaJS.anyRefEqEq(scp$2, ScalaJS.modules.scala_xml_TopScope()))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("no xmlns definitions here, please.")
  };
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(63);
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
  return md$2
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__prologOrTextDecl__Lscala_xml_parsing_MarkupHandler__Z__Lscala_Tuple3 = (function($$this, isProlog) {
  var info_ver = ScalaJS.modules.scala_None();
  var info_enc = ScalaJS.modules.scala_None();
  var info_stdl = ScalaJS.modules.scala_None();
  var m = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xmlProcInstr__Lscala_xml_MetaData();
  var n = 0;
  if (isProlog) {
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V()
  };
  var x1 = m.apply__T__Lscala_collection_Seq("version");
  matchEnd7: {
    if (ScalaJS.anyRefEqEq(null, x1)) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    var o11 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1);
    if ((!o11.isEmpty__Z())) {
      var p2 = ScalaJS.as.java_lang_String(o11.get__O());
      if (ScalaJS.anyRefEqEq("1.0", p2)) {
        info_ver = new ScalaJS.c.scala_Some().init___O("1.0");
        n = (n + 1);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd7
      }
    };
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("cannot deal with versions != 1.0");
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd7
  };
  var x1$2 = m.apply__T__Lscala_collection_Seq("encoding");
  matchEnd5: {
    if (ScalaJS.anyRefEqEq(null, x1$2)) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    var o9 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1$2);
    if ((!o9.isEmpty__Z())) {
      var enc = ScalaJS.as.java_lang_String(o9.get__O());
      if ((!ScalaJS.as.scala_xml_parsing_TokenTests($$this).isValidIANAEncoding__Lscala_collection_Seq__Z(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString(enc)))) {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V((("\"" + enc) + "\" is not a valid encoding"));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      } else {
        info_enc = new ScalaJS.c.scala_Some().init___O(enc);
        n = (n + 1);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  if (isProlog) {
    var x1$3 = m.apply__T__Lscala_collection_Seq("standalone");
    matchEnd10: {
      if (ScalaJS.anyRefEqEq(null, x1$3)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd10
      };
      var o14 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1$3);
      if ((!o14.isEmpty__Z())) {
        var p2$2 = ScalaJS.as.java_lang_String(o14.get__O());
        if (ScalaJS.anyRefEqEq("yes", p2$2)) {
          info_stdl = new ScalaJS.c.scala_Some().init___O(ScalaJS.bZ(true));
          n = (n + 1);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd10
        }
      };
      var o16 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1$3);
      if ((!o16.isEmpty__Z())) {
        var p4 = ScalaJS.as.java_lang_String(o16.get__O());
        if (ScalaJS.anyRefEqEq("no", p4)) {
          info_stdl = new ScalaJS.c.scala_Some().init___O(ScalaJS.bZ(false));
          n = (n + 1);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd10
        }
      };
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("either 'yes' or 'no' expected");
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd10
    }
  };
  if (((m.length__I() - n) !== 0)) {
    if (isProlog) {
      var s = "SDDecl? "
    } else {
      var s = ""
    };
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("VersionInfo EncodingDecl? %sor '?>' expected!")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s]))))
  };
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(info_ver, info_enc, info_stdl)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__prolog__Lscala_xml_parsing_MarkupHandler__Lscala_Tuple3 = (function($$this) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__prologOrTextDecl__Lscala_xml_parsing_MarkupHandler__Z__Lscala_Tuple3(ScalaJS.as.scala_xml_parsing_MarkupHandler(ScalaJS.as.scala_xml_parsing_MarkupParser($$this)), true)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__textDecl__Lscala_xml_parsing_MarkupHandler__Lscala_Tuple2 = (function($$this) {
  var x1 = ScalaJS.impls.scala_xml_parsing_MarkupParser$class__prologOrTextDecl__Lscala_xml_parsing_MarkupHandler__Z__Lscala_Tuple3(ScalaJS.as.scala_xml_parsing_MarkupHandler(ScalaJS.as.scala_xml_parsing_MarkupParser($$this)), false);
  if ((x1 !== null)) {
    var x1$2 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var x2 = ScalaJS.as.scala_Option(x1.$$und2__O());
    return new ScalaJS.c.scala_Tuple2().init___O__O(x1$2, x2)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__document__Lscala_xml_parsing_MarkupHandler__Lscala_xml_Document = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc$und$eq__Lscala_xml_Document__V(new ScalaJS.c.scala_xml_Document().init___());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).dtd$und$eq__Lscala_xml_dtd_DTD__V(null);
  var info_prolog = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.modules.scala_None(), ScalaJS.modules.scala_None(), ScalaJS.modules.scala_None());
  if ((60 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("< expected");
    return null
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  var children = null;
  if ((63 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    info_prolog = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).prolog__Lscala_Tuple3();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().version$und$eq__Lscala_Option__V(ScalaJS.as.scala_Option(info_prolog.$$und1__O()));
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().encoding$und$eq__Lscala_Option__V(ScalaJS.as.scala_Option(info_prolog.$$und2__O()));
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().standAlone$und$eq__Lscala_Option__V(ScalaJS.as.scala_Option(info_prolog.$$und3__O()));
    children = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).content__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(ScalaJS.modules.scala_xml_TopScope())
  } else {
    var ts = new ScalaJS.c.scala_xml_NodeBuffer().init___();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).content1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V(ScalaJS.modules.scala_xml_TopScope(), ts);
    ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).content__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(ScalaJS.modules.scala_xml_TopScope()));
    children = ScalaJS.modules.scala_xml_NodeSeq().fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(ts)
  };
  var elemCount = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var theNode = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  children.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, elemCount$1, theNode$1) {
    return (function(c) {
      var x1 = c;
      matchEnd8: {
        if (ScalaJS.is.scala_xml_ProcInstr(x1)) {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd8
        };
        if (ScalaJS.is.scala_xml_Comment(x1)) {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd8
        };
        if (ScalaJS.is.scala_xml_EntityRef(x1)) {
          ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer).reportSyntaxError__T__V("no entity references allowed here");
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd8
        };
        if (ScalaJS.is.scala_xml_SpecialNode(x1)) {
          var x5 = ScalaJS.as.scala_xml_SpecialNode(x1);
          if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(x5.toString__T())) > 0)) {
            elemCount$1.elem$1 = (elemCount$1.elem$1 + 2);
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd8
          } else {
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd8
          }
        };
        if ((x1 !== null)) {
          var x6 = x1;
          elemCount$1.elem$1 = (elemCount$1.elem$1 + 1);
          theNode$1.elem$1 = x6;
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd8
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })($$this, elemCount, theNode)));
  if ((1 !== elemCount.elem$1)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("document must contain exactly one element");
    ScalaJS.modules.scala_Console().println__O__V(children.toList__Lscala_collection_immutable_List())
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().children$und$eq__Lscala_collection_Seq__V(children);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().docElem$und$eq__Lscala_xml_Node__V(ScalaJS.as.scala_xml_Node(theNode.elem$1));
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__putChar__Lscala_xml_parsing_MarkupHandler__C__Lscala_collection_mutable_StringBuilder = (function($$this, c) {
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().append__C__Lscala_collection_mutable_StringBuilder(c)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__initialize__Lscala_xml_parsing_MarkupHandler__Lscala_xml_parsing_MarkupHandler = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  return $$this
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__ch$undreturning$undnextch__Lscala_xml_parsing_MarkupHandler__C = (function($$this) {
  var res = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  return res
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkAttributes__Lscala_xml_parsing_MarkupHandler__T__Lscala_xml_NamespaceBinding__Lscala_Tuple2 = (function($$this, name, pscope) {
  if (ScalaJS.as.scala_xml_parsing_TokenTests($$this).isNameStart__C__Z(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xAttributes__Lscala_xml_NamespaceBinding__Lscala_Tuple2(pscope)
  } else {
    return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.modules.scala_xml_Null(), pscope)
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkProcInstr__Lscala_xml_parsing_MarkupHandler__I__T__T__Lscala_xml_NodeSeq = (function($$this, position, name, text) {
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().procInstr__I__T__T__Lscala_xml_NodeSeq(position, name, text)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__nextch__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextChNeeded$und$eq__Z__V(true)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xAttributes__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_Tuple2 = (function($$this, pscope) {
  var scope = pscope;
  var aMap = ScalaJS.modules.scala_xml_Null();
  while (ScalaJS.as.scala_xml_parsing_TokenTests($$this).isNameStart__C__Z(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    var pos = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I();
    var qname = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xEQ__V();
    var _ = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    var value = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xAttributeValue__T();
    var rc7 = false;
    var x3 = null;
    var x1 = ScalaJS.modules.scala_xml_Utility().prefix__T__Lscala_Option(qname);
    matchEnd8: {
      if (ScalaJS.is.scala_Some(x1)) {
        rc7 = true;
        x3 = ScalaJS.as.scala_Some(x1);
        var p2 = ScalaJS.as.java_lang_String(x3.x__O());
        if (ScalaJS.anyRefEqEq("xmlns", p2)) {
          var prefix = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(qname, 6, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(qname));
          scope = new ScalaJS.c.scala_xml_NamespaceBinding().init___T__T__Lscala_xml_NamespaceBinding(prefix, value, scope);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd8
        }
      };
      if (rc7) {
        var prefix$2 = ScalaJS.as.java_lang_String(x3.x__O());
        var key = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(qname, (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(prefix$2) + 1), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(qname));
        aMap = new ScalaJS.c.scala_xml_PrefixedAttribute().init___T__T__Lscala_collection_Seq__Lscala_xml_MetaData(prefix$2, key, ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(value), aMap);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.anyRefEqEq(qname, "xmlns")) {
        scope = new ScalaJS.c.scala_xml_NamespaceBinding().init___T__T__Lscala_xml_NamespaceBinding(null, value, scope);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      } else {
        aMap = new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__Lscala_collection_Seq__Lscala_xml_MetaData(qname, ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(value), aMap);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      }
    };
    if ((((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 47) && (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 62)) && (63 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()))) {
      ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V()
    }
  };
  if ((!aMap.wellformed__Lscala_xml_NamespaceBinding__Z(scope))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("double attribute")
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O(aMap, scope)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xEntityValue__Lscala_xml_parsing_MarkupHandler__T = (function($$this) {
  var endch = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  while (((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== endch) && (!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z()))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).putChar__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  var str = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
  return str
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xCharData__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NodeSeq = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("[CDATA["));
  return ScalaJS.as.scala_xml_NodeSeq(ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xTakeUntil__Lscala_Function2__Lscala_Function0__T__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer) {
    return (function(pos, s) {
      pos = ScalaJS.uI(pos);
      return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkResult$1__Lscala_xml_parsing_MarkupHandler__I__T__Lscala_xml_NodeSeq(arg$outer, pos, s)
    })
  })($$this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.bI(ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer).pos__I())
    })
  })($$this)), "]]>"))
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xComment__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NodeSeq = (function($$this) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("--"));
  while (true) {
    if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 45)) {
      sb.append__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
      var jsx$1 = (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 45)
    } else {
      var jsx$1 = false
    };
    if (jsx$1) {
      sb.length$und$eq__I__V((sb.length__I() - 1));
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
      ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
      return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().comment__I__T__Lscala_xml_NodeSeq(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I(), sb.toString__T())
    } else {
      sb.append__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())
    };
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  throw new ScalaJS.c.scala_xml_parsing_FatalError().init___T("this cannot happen")
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__appendText__Lscala_xml_parsing_MarkupHandler__I__Lscala_xml_NodeBuffer__T__V = (function($$this, pos, ts, txt) {
  if (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).preserveWS__Z()) {
    ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().text__I__T__Lscala_xml_NodeSeq(pos, txt))
  } else {
    ScalaJS.modules.scala_xml_TextBuffer().fromString__T__Lscala_xml_TextBuffer(txt).toText__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, pos$1, ts$2) {
      return (function(t) {
        return ts$2.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().text__I__T__Lscala_xml_NodeSeq(pos$1, t.text__T()))
      })
    })($$this, pos, ts)))
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__content1__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V = (function($$this, pscope, ts) {
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  switch (x1) {
    case 33:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        if ((91 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
          ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xCharData__Lscala_xml_NodeSeq())
        } else {
          if ((68 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).parseDTD__V()
          } else {
            ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xComment__Lscala_xml_NodeSeq())
          }
        };
        break
      };
    case 63:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xProcInstr__O());
        break
      };
    default:
      ts.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).element1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(pscope));
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__content__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function($$this, pscope) {
  var ts = new ScalaJS.c.scala_runtime_ObjectRef().init___O(new ScalaJS.c.scala_xml_NodeBuffer().init___());
  var exit = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z();
  while ((!exit)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).tmppos$und$eq__I__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I());
    exit = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z();
    if (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z()) {
      return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__done$1__Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef__Lscala_xml_NodeSeq($$this, ts)
    };
    var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
    switch (x1) {
      case 60:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          var x1$2 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
          switch (x1$2) {
            case 47:
              {
                exit = true;
                break
              };
            default:
              ScalaJS.as.scala_xml_parsing_MarkupParser($$this).content1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V(pscope, ScalaJS.as.scala_xml_NodeBuffer(ts.elem$1));
          };
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break
        };
      case 38:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          var x1$3 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
          switch (x1$3) {
            case 35:
              {
                ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
                var theChar = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().text__I__T__Lscala_xml_NodeSeq(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).tmppos__I(), ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xCharRef__Lscala_Function0__Lscala_Function0__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
                  return (function() {
                    return ScalaJS.bC(ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer).ch__C())
                  })
                })($$this)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
                  return (function() {
                    ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer).nextch__V();
                    return ScalaJS.bV(undefined)
                  })
                })($$this))));
                ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(59);
                ScalaJS.as.scala_xml_NodeBuffer(ts.elem$1).$$amp$plus__O__Lscala_xml_NodeBuffer(theChar);
                break
              };
            default:
              {
                var n = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
                ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(59);
                if (ScalaJS.modules.scala_xml_Utility$Escapes().pairs__Lscala_collection_immutable_Map().contains__O__Z(n)) {
                  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().entityRef__I__T__Lscala_xml_NodeSeq(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).tmppos__I(), n);
                  ScalaJS.as.scala_xml_NodeBuffer(ts.elem$1).$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.modules.scala_xml_Utility$Escapes().pairs__Lscala_collection_immutable_Map().apply__O__O(n))
                } else {
                  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).push__T__V(n);
                  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
                }
              };
          };
          break
        };
      default:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).appendText__I__Lscala_xml_NodeBuffer__T__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).tmppos__I(), ScalaJS.as.scala_xml_NodeBuffer(ts.elem$1), ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xText__Lscala_xml_parsing_MarkupHandler__T(ScalaJS.as.scala_xml_parsing_MarkupHandler(ScalaJS.as.scala_xml_parsing_MarkupParser($$this))));
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
    }
  };
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__done$1__Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef__Lscala_xml_NodeSeq($$this, ts)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__externalID__Lscala_xml_parsing_MarkupHandler__Lscala_xml_dtd_ExternalID = (function($$this) {
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  switch (x1) {
    case 83:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("YSTEM"));
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
        var sysID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).systemLiteral__T();
        return new ScalaJS.c.scala_xml_dtd_SystemID().init___T(sysID);
        break
      };
    case 80:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("UBLIC"));
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
        var pubID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pubidLiteral__T();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
        var sysID$2 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).systemLiteral__T();
        return new ScalaJS.c.scala_xml_dtd_PublicID().init___T__T(pubID, sysID$2);
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bC(x1));
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__parseDTD__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  var extID = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).dtd__Lscala_xml_dtd_DTD() !== null)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("unexpected character (DOCTYPE already defined")
  };
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("DOCTYPE"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var n = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  if (((83 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()) || (80 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()))) {
    extID.elem$1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).externalID__Lscala_xml_dtd_ExternalID();
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V()
  };
  if (((!ScalaJS.anyRefEqEq(null, ScalaJS.as.scala_xml_dtd_ExternalID(extID.elem$1))) && $$this.isValidating__Z())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pushExternal__T__V(ScalaJS.as.scala_xml_dtd_ExternalID(extID.elem$1).systemId__T());
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extIndex$und$eq__I__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().length__I());
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extSubset__V();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pop__V();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extIndex$und$eq__I__V(-1)
  };
  if ((91 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).intSubset__V();
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(93);
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).dtd$und$eq__Lscala_xml_dtd_DTD__V(new ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$4().init___Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef($$this, extID));
  if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document() !== null)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc__Lscala_xml_Document().dtd$und$eq__Lscala_xml_dtd_DTD__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).dtd__Lscala_xml_dtd_DTD())
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().endDTD__T__V(n)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__element__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function($$this, pscope) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(60);
  return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).element1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(pscope)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__element1__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function($$this, pscope) {
  var pos = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I();
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xTag__O__Lscala_Tuple2(pscope);
  matchEnd4: {
    if ((x1 !== null)) {
      var qname = ScalaJS.as.java_lang_String(x1.$$und1__O());
      var p2 = ScalaJS.as.scala_Tuple2(x1.$$und2__O());
      if ((p2 !== null)) {
        var aMap = ScalaJS.as.scala_xml_MetaData(p2.$$und1__O());
        var scope = ScalaJS.as.scala_xml_NamespaceBinding(p2.$$und2__O());
        var x$2 = new ScalaJS.c.scala_Tuple3().init___O__O__O(qname, aMap, scope);
        break matchEnd4
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var qname$2 = ScalaJS.as.java_lang_String(x$2.$$und1__O());
  var aMap$2 = ScalaJS.as.scala_xml_MetaData(x$2.$$und2__O());
  var scope$2 = ScalaJS.as.scala_xml_NamespaceBinding(x$2.$$und3__O());
  var x1$3 = ScalaJS.modules.scala_xml_Utility().prefix__T__Lscala_Option(qname$2);
  matchEnd4$2: {
    if (ScalaJS.is.scala_Some(x1$3)) {
      var x2 = ScalaJS.as.scala_Some(x1$3);
      var p = ScalaJS.as.java_lang_String(x2.x__O());
      var x1$2 = new ScalaJS.c.scala_Tuple2().init___O__O(p, new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(qname$2)).drop__I__O((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(p) + 1)));
      break matchEnd4$2
    };
    var x1$2 = new ScalaJS.c.scala_Tuple2().init___O__O(null, qname$2);
    break matchEnd4$2
  };
  matchEnd3: {
    if ((x1$2 !== null)) {
      var pre = ScalaJS.as.java_lang_String(x1$2.$$und1__O());
      var local = ScalaJS.as.java_lang_String(x1$2.$$und2__O());
      var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(pre, local);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  var pre$2 = ScalaJS.as.java_lang_String(x$3.$$und1__O());
  var local$2 = ScalaJS.as.java_lang_String(x$3.$$und2__O());
  if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 47)) {
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("/>"));
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V(pos, pre$2, local$2, aMap$2, scope$2);
    var ts = ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
  } else {
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V(pos, pre$2, local$2, aMap$2, scope$2);
    var tmp = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).content__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(scope$2);
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xEndTag__T__V(qname$2);
    var ts = tmp
  };
  var res = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq(pos, pre$2, local$2, aMap$2, scope$2, ScalaJS.anyRefEqEq(ts, ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()), ts);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().elemEnd__I__T__T__V(pos, pre$2, local$2);
  return res
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xText__Lscala_xml_parsing_MarkupHandler__T = (function($$this) {
  var exit = false;
  while ((!exit)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).putChar__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
    var opos = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    exit = ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z() || (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 60)) || (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 38))
  };
  var str = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
  return str
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__systemLiteral__Lscala_xml_parsing_MarkupHandler__T = (function($$this) {
  var endch = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  if (((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 39) && (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 34))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("quote ' or \" expected")
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  while (((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== endch) && (!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z()))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).putChar__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  var str = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
  return str
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pubidLiteral__Lscala_xml_parsing_MarkupHandler__T = (function($$this) {
  var endch = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  if (((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 39) && (ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 34))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("quote ' or \" expected")
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  while (((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== endch) && (!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z()))) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).putChar__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
    if ((!ScalaJS.as.scala_xml_parsing_TokenTests($$this).isPubIDChar__C__Z(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()))) {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V((("char '" + ScalaJS.bC(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) + "' is not allowed in public id"))
    };
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  var str = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
  return str
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__extSubset__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  var textdecl = null;
  if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 60)) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 63)) {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
      textdecl = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).textDecl__Lscala_Tuple2();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).markupDecl1__O()
    }
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  while ((!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).markupDecl__V()
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__markupDecl1__Lscala_xml_parsing_MarkupHandler__O = (function($$this) {
  if ((63 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    return ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xProcInstr__O()
  } else {
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(33);
    var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
    switch (x1) {
      case 45:
        {
          return ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xComment__Lscala_xml_NodeSeq();
          break
        };
      case 69:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          if ((76 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).elementDecl__V();
            return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          } else {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).entityDecl__V();
            return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          };
          break
        };
      case 65:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).attrDecl__V();
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break
        };
      case 78:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).notationDecl__V();
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break
        };
      case 91:
        {
          if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().length__I() >= ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extIndex__I())) {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
            var x1$2 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
            switch (x1$2) {
              case 37:
                {
                  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
                  var ent = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
                  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(59);
                  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
                  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).push__T__V(ent);
                  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
                  var stmt = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
                  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
                  var x1$3 = stmt;
                  matchEnd5: {
                    if (ScalaJS.anyRefEqEq("INCLUDE", x1$3)) {
                      ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doInclude$1__Lscala_xml_parsing_MarkupHandler__V($$this);
                      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                      break matchEnd5
                    };
                    if (ScalaJS.anyRefEqEq("IGNORE", x1$3)) {
                      ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doIgnore$1__Lscala_xml_parsing_MarkupHandler__V($$this);
                      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
                      break matchEnd5
                    };
                    throw new ScalaJS.c.scala_MatchError().init___O(x1$3)
                  };
                  break
                };
              case 73:
                {
                  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
                  var x1$4 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
                  switch (x1$4) {
                    case 71:
                      {
                        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
                        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("NORE"));
                        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
                        ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doIgnore$1__Lscala_xml_parsing_MarkupHandler__V($$this);
                        break
                      };
                    case 78:
                      {
                        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
                        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("NCLUDE"));
                        ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doInclude$1__Lscala_xml_parsing_MarkupHandler__V($$this);
                        break
                      };
                    default:
                      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bC(x1$4));
                  };
                  break
                };
              default:
                throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bC(x1$2));
            };
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(93);
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
            return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          } else {
            var qual$1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
            var x$6 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I();
            var x$7 = (("unexpected character '" + ScalaJS.bC(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) + "', expected some markupdecl");
            var x$8 = qual$1.reportError$default$3__Ljava_io_PrintStream();
            qual$1.reportError__I__T__Ljava_io_PrintStream__V(x$6, x$7, x$8);
            while ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 62)) {
              ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
            };
            return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          };
          break
        };
      default:
        {
          var qual$1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
          var x$6 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I();
          var x$7 = (("unexpected character '" + ScalaJS.bC(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) + "', expected some markupdecl");
          var x$8 = qual$1.reportError$default$3__Ljava_io_PrintStream();
          qual$1.reportError__I__T__Ljava_io_PrintStream__V(x$6, x$7, x$8);
          while ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 62)) {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
          };
          return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
    }
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__markupDecl__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  switch (x1) {
    case 37:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        var ent = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(59);
        if ((!$$this.isValidating__Z())) {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().peReference__T__V(ent)
        } else {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).push__T__V(ent)
        };
        break
      };
    case 60:
      {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).markupDecl1__O();
        break
      };
    default:
      if (ScalaJS.as.scala_xml_parsing_TokenTests($$this).isSpace__C__Z(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V()
      } else {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V(((("markupdecl: unexpected character '" + ScalaJS.bC(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) + "' #") + ScalaJS.bI(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())));
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
      };
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__intSubset__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  while ((93 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).markupDecl__V()
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__elementDecl__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("EMENT"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var n = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  while ((62 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).putChar__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C());
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  var cmstr = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().elemDecl__T__T__V(n, cmstr)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__attrDecl__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("TTLIST"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var n = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var attList = ScalaJS.modules.scala_collection_immutable_Nil();
  while ((62 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    var aname = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
    while (((((34 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()) && (39 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) && (35 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) && (60 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()))) {
      if ((!ScalaJS.as.scala_xml_parsing_TokenTests($$this).isSpace__C__Z(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C()))) {
        ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().append__C__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
    };
    var atpe = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().toString__T();
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0);
    var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
    switch (x1) {
      case 39:
        /*<skip>*/;
      case 34:
        {
          var defdecl = new ScalaJS.c.scala_xml_dtd_DEFAULT().init___Z__T(false, ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xAttributeValue__T());
          break
        };
      case 35:
        {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
          var x1$2 = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
          matchEnd6: {
            if (ScalaJS.anyRefEqEq("FIXED", x1$2)) {
              ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
              var defdecl = new ScalaJS.c.scala_xml_dtd_DEFAULT().init___Z__T(true, ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xAttributeValue__T());
              break matchEnd6
            };
            if (ScalaJS.anyRefEqEq("IMPLIED", x1$2)) {
              var defdecl = ScalaJS.modules.scala_xml_dtd_IMPLIED();
              break matchEnd6
            };
            if (ScalaJS.anyRefEqEq("REQUIRED", x1$2)) {
              var defdecl = ScalaJS.modules.scala_xml_dtd_REQUIRED();
              break matchEnd6
            };
            throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
          };
          break
        };
      default:
        var defdecl = null;
    };
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
    attList = attList.$$colon$colon__O__Lscala_collection_immutable_List(new ScalaJS.c.scala_xml_dtd_AttrDecl().init___T__T__Lscala_xml_dtd_DefaultDecl(aname, atpe, defdecl));
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).cbuf__Lscala_collection_mutable_StringBuilder().length$und$eq__I__V(0)
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().attListDecl__T__Lscala_collection_immutable_List__V(n, attList.reverse__Lscala_collection_immutable_List())
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__entityDecl__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  var isParameterEntity = false;
  var entdef = null;
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("NTITY"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  if ((37 === ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
    isParameterEntity = true;
    ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V()
  };
  var n = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  switch (x1) {
    case 83:
      /*<skip>*/;
    case 80:
      {
        var extID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).externalID__Lscala_xml_dtd_ExternalID();
        if (isParameterEntity) {
          ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
          ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().parameterEntityDecl__T__Lscala_xml_dtd_EntityDef__V(n, new ScalaJS.c.scala_xml_dtd_ExtDef().init___Lscala_xml_dtd_ExternalID(extID))
        } else {
          ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
          if ((62 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("NDATA"));
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
            var notat = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
            ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().unparsedEntityDecl__T__Lscala_xml_dtd_ExternalID__T__V(n, extID, notat)
          } else {
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
            ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().parsedEntityDecl__T__Lscala_xml_dtd_EntityDef__V(n, new ScalaJS.c.scala_xml_dtd_ExtDef().init___Lscala_xml_dtd_ExternalID(extID))
          }
        };
        break
      };
    case 34:
      /*<skip>*/;
    case 39:
      {
        var av = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).xEntityValue__T();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
        ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
        if (isParameterEntity) {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().parameterEntityDecl__T__Lscala_xml_dtd_EntityDef__V(n, new ScalaJS.c.scala_xml_dtd_IntDef().init___T(av))
        } else {
          ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().parsedEntityDecl__T__Lscala_xml_dtd_EntityDef__V(n, new ScalaJS.c.scala_xml_dtd_IntDef().init___T(av))
        };
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bC(x1));
  }
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__notationDecl__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("OTATION"));
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  var notat = ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xName__T();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
  if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 83)) {
    var extID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).externalID__Lscala_xml_dtd_ExternalID()
  } else {
    if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() === 80)) {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V();
      ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("UBLIC"));
      ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpace__V();
      var pubID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pubidLiteral__T();
      ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
      if ((ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C() !== 62)) {
        var sysID = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).systemLiteral__T()
      } else {
        var sysID = null
      };
      var extID = new ScalaJS.c.scala_xml_dtd_PublicID().init___T__T(pubID, sysID)
    } else {
      ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__T__V("PUBLIC or SYSTEM expected");
      var extID = ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("died parsing notationdecl")
    }
  };
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xSpaceOpt__V();
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(62);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().notationDecl__T__Lscala_xml_dtd_ExternalID__V(notat, extID)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportSyntaxError__Lscala_xml_parsing_MarkupHandler__I__T__V = (function($$this, pos, str) {
  var qual$2 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
  var x$9 = pos;
  var x$10 = str;
  var x$11 = qual$2.reportError$default$3__Ljava_io_PrintStream();
  qual$2.reportError__I__T__Ljava_io_PrintStream__V(x$9, x$10, x$11)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportSyntaxError__Lscala_xml_parsing_MarkupHandler__T__V = (function($$this, str) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__I__T__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos__I(), str)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportValidationError__Lscala_xml_parsing_MarkupHandler__I__T__V = (function($$this, pos, str) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reportSyntaxError__I__T__V(pos, str)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__push__Lscala_xml_parsing_MarkupHandler__T__V = (function($$this, entityName) {
  if ((!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z())) {
    var jsx$3 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this);
    var x$4 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
    var jsx$2 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$4);
    jsx$3.inpStack$und$eq__Lscala_collection_immutable_List__V(jsx$2)
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput$und$eq__Lscala_io_Source__V($$this.replacementText__T__Lscala_io_Source(entityName));
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pushExternal__Lscala_xml_parsing_MarkupHandler__T__V = (function($$this, systemId) {
  if ((!ScalaJS.as.scala_xml_parsing_MarkupParser($$this).eof__Z())) {
    var jsx$5 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this);
    var x$5 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source();
    var jsx$4 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$5);
    jsx$5.inpStack$und$eq__Lscala_collection_immutable_List__V(jsx$4)
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C();
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput$und$eq__Lscala_io_Source__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).externalSource__T__Lscala_io_Source(systemId));
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pop__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput$und$eq__Lscala_io_Source__V(ScalaJS.as.scala_io_Source(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().head__O()));
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack__Lscala_collection_immutable_List().tail__O()));
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).lastChRead$und$eq__C__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source().ch__C());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextChNeeded$und$eq__Z__V(false);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).pos$und$eq__I__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput__Lscala_io_Source().pos__I());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reachedEof$und$eq__Z__V(false)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkResult$1__Lscala_xml_parsing_MarkupHandler__I__T__Lscala_xml_NodeSeq = (function($$this, pos, s) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler().text__I__T__Lscala_xml_NodeSeq(pos, s);
  return ScalaJS.modules.scala_xml_PCData().apply__T__Lscala_xml_PCData(s)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__done$1__Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef__Lscala_xml_NodeSeq = (function($$this, ts$1) {
  return new ScalaJS.c.scala_xml_parsing_MarkupParser$$anon$1().init___Lscala_xml_parsing_MarkupHandler__Lscala_runtime_ObjectRef($$this, ts$1)
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doInclude$1__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(91);
  while ((93 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).markupDecl__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__doIgnore$1__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParserCommon($$this).xToken__C__V(91);
  while ((93 !== ScalaJS.as.scala_xml_parsing_MarkupParser($$this).ch__C())) {
    ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
  };
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextch__V()
});
ScalaJS.impls.scala_xml_parsing_MarkupParser$class__$init$__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).curInput$und$eq__Lscala_io_Source__V(ScalaJS.as.scala_xml_parsing_MarkupParser($$this).input__Lscala_io_Source());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$undsetter$und$scala$xml$parsing$MarkupParser$$handle$und$eq__Lscala_xml_parsing_MarkupHandler__V($$this);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).inpStack$und$eq__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).extIndex$und$eq__I__V(-1);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).nextChNeeded$und$eq__Z__V(false);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).reachedEof$und$eq__Z__V(false);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).scala$xml$parsing$MarkupParser$$undsetter$und$cbuf$und$eq__Lscala_collection_mutable_StringBuilder__V(new ScalaJS.c.scala_collection_mutable_StringBuilder().init___());
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).dtd$und$eq__Lscala_xml_dtd_DTD__V(null);
  ScalaJS.as.scala_xml_parsing_MarkupParser($$this).doc$und$eq__Lscala_xml_Document__V(null)
});
//@ sourceMappingURL=MarkupParser$class.js.map

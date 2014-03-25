/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModelParser$ = (function() {
  ScalaJS.c.scala_xml_dtd_Scanner.call(this)
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype = new ScalaJS.inheritable.scala_xml_dtd_Scanner();
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModelParser$;
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.parse__T__Lscala_xml_dtd_ContentModel = (function(s) {
  this.initScanner__T__V(s);
  return this.contentspec__Lscala_xml_dtd_ContentModel()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.accept__I__V = (function(tok) {
  if ((this.token__I() !== tok)) {
    if (((tok === 6) && (this.token__I() === 10))) {
      ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("in DTDs, \nmixed content models must be like (#PCDATA|Name|Name|...)*")
    } else {
      ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(((("expected " + this.token2string__I__T(tok)) + ", got unexpected token:") + this.token2string__I__T(this.token__I())))
    }
  };
  this.nextToken__V()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.maybeSuffix__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp = (function(s) {
  var x1 = this.token__I();
  switch (x1) {
    case 6:
      {
        this.nextToken__V();
        return new ScalaJS.c.scala_util_regexp_Base$Star().init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp(ScalaJS.modules.scala_xml_dtd_ContentModel(), s);
        break
      };
    case 7:
      {
        this.nextToken__V();
        return ScalaJS.modules.scala_xml_dtd_ContentModel().Sequ__Lscala_util_regexp_Base$Sequ$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$RegExp(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_util_regexp_Base$RegExp.getArrayOf(), [s, new ScalaJS.c.scala_util_regexp_Base$Star().init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp(ScalaJS.modules.scala_xml_dtd_ContentModel(), s)]), 1)));
        break
      };
    case 8:
      {
        this.nextToken__V();
        return ScalaJS.modules.scala_xml_dtd_ContentModel().Alt__Lscala_util_regexp_Base$Alt$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$Alt(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_util_regexp_Base$RegExp.getArrayOf(), [ScalaJS.modules.scala_xml_dtd_ContentModel().Eps__Lscala_util_regexp_Base$Eps$(), s]), 1)));
        break
      };
    default:
      return s;
  }
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.contentspec__Lscala_xml_dtd_ContentModel = (function() {
  var x1 = this.token__I();
  switch (x1) {
    case 1:
      {
        var x1$2 = this.value__T();
        if (ScalaJS.anyRefEqEq("ANY", x1$2)) {
          return ScalaJS.modules.scala_xml_dtd_ANY()
        };
        if (ScalaJS.anyRefEqEq("EMPTY", x1$2)) {
          return ScalaJS.modules.scala_xml_dtd_EMPTY()
        };
        return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("expected ANY, EMPTY or '(' instead of " + this.value__T()));
        break
      };
    case 3:
      {
        this.nextToken__V();
        this.sOpt__V();
        if ((this.token__I() !== 0)) {
          return new ScalaJS.c.scala_xml_dtd_ELEMENTS().init___Lscala_util_regexp_Base$RegExp(this.regexp__Lscala_util_regexp_Base$RegExp())
        } else {
          this.nextToken__V();
          var x1$3 = this.token__I();
          switch (x1$3) {
            case 4:
              {
                return ScalaJS.modules.scala_xml_dtd_PCDATA();
                break
              };
            case 9:
              {
                var res = new ScalaJS.c.scala_xml_dtd_MIXED().init___Lscala_util_regexp_Base$RegExp(this.choiceRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Alt(ScalaJS.modules.scala_xml_dtd_ContentModel().Eps__Lscala_util_regexp_Base$Eps$()));
                this.sOpt__V();
                this.accept__I__V(4);
                this.accept__I__V(6);
                return res;
                break
              };
            default:
              return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("unexpected token:" + this.token2string__I__T(this.token__I())));
          }
        };
        break
      };
    default:
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("unexpected token:" + this.token2string__I__T(this.token__I())));
  }
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.sOpt__V = (function() {
  if ((this.token__I() === 13)) {
    this.nextToken__V()
  }
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.regexp__Lscala_util_regexp_Base$RegExp = (function() {
  var p = this.particle__Lscala_util_regexp_Base$RegExp();
  this.sOpt__V();
  var x1 = this.token__I();
  switch (x1) {
    case 4:
      {
        this.nextToken__V();
        var jsx$1 = p;
        break
      };
    case 9:
      {
        var q = this.choiceRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Alt(p);
        this.accept__I__V(4);
        var jsx$1 = q;
        break
      };
    case 5:
      {
        var q$2 = this.seqRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(p);
        this.accept__I__V(4);
        var jsx$1 = q$2;
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  };
  return this.maybeSuffix__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(jsx$1)
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.seqRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp = (function(p) {
  var k = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_util_regexp_Base$RegExp.getArrayOf(), [p]), 1)));
  while ((this.token__I() === 5)) {
    this.nextToken__V();
    this.sOpt__V();
    var x$1 = this.particle__Lscala_util_regexp_Base$RegExp();
    k = k.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
    this.sOpt__V()
  };
  return ScalaJS.modules.scala_xml_dtd_ContentModel().Sequ__Lscala_util_regexp_Base$Sequ$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$RegExp(k.reverse__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.choiceRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Alt = (function(p) {
  var k = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_util_regexp_Base$RegExp.getArrayOf(), [p]), 1)));
  while ((this.token__I() === 9)) {
    this.nextToken__V();
    this.sOpt__V();
    var x$2 = this.particle__Lscala_util_regexp_Base$RegExp();
    k = k.$$colon$colon__O__Lscala_collection_immutable_List(x$2);
    this.sOpt__V()
  };
  return ScalaJS.modules.scala_xml_dtd_ContentModel().Alt__Lscala_util_regexp_Base$Alt$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$Alt(k.reverse__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.particle__Lscala_util_regexp_Base$RegExp = (function() {
  var x1 = this.token__I();
  switch (x1) {
    case 3:
      {
        this.nextToken__V();
        this.sOpt__V();
        return this.regexp__Lscala_util_regexp_Base$RegExp();
        break
      };
    case 1:
      {
        var a = new ScalaJS.c.scala_util_regexp_WordExp$Letter().init___Lscala_util_regexp_WordExp__Lscala_util_regexp_WordExp$Label(ScalaJS.modules.scala_xml_dtd_ContentModel(), new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName().init___T(this.value__T()));
        this.nextToken__V();
        return this.maybeSuffix__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(a);
        break
      };
    default:
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("expected '(' or Name, got:" + this.token2string__I__T(this.token__I())));
  }
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.atom__Lscala_util_regexp_WordExp$Letter = (function() {
  var x1 = this.token__I();
  switch (x1) {
    case 1:
      {
        var a = new ScalaJS.c.scala_util_regexp_WordExp$Letter().init___Lscala_util_regexp_WordExp__Lscala_util_regexp_WordExp$Label(ScalaJS.modules.scala_xml_dtd_ContentModel(), new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName().init___T(this.value__T()));
        this.nextToken__V();
        return a;
        break
      };
    default:
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("expected Name, got:" + this.token2string__I__T(this.token__I())));
  }
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.atom__ = (function() {
  return this.atom__Lscala_util_regexp_WordExp$Letter()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.particle__ = (function() {
  return this.particle__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.choiceRest__Lscala_util_regexp_Base$RegExp__ = (function(p) {
  return this.choiceRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Alt(p)
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.seqRest__Lscala_util_regexp_Base$RegExp__ = (function(p$2) {
  return this.seqRest__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(p$2)
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.regexp__ = (function() {
  return this.regexp__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.sOpt__ = (function() {
  return ScalaJS.bV(this.sOpt__V())
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.contentspec__ = (function() {
  return this.contentspec__Lscala_xml_dtd_ContentModel()
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.maybeSuffix__Lscala_util_regexp_Base$RegExp__ = (function(s) {
  return this.maybeSuffix__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(s)
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.accept__I__ = (function(tok) {
  return ScalaJS.bV(this.accept__I__V(tok))
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.parse__T__ = (function(s$2) {
  return this.parse__T__Lscala_xml_dtd_ContentModel(s$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModelParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModelParser$.prototype = ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype;
ScalaJS.is.scala_xml_dtd_ContentModelParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModelParser$)))
});
ScalaJS.as.scala_xml_dtd_ContentModelParser$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModelParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModelParser")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModelParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModelParser$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModelParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModelParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModelParser;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModelParser$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModelParser$: 0
}, false, "scala.xml.dtd.ContentModelParser$", ScalaJS.data.scala_xml_dtd_Scanner, {
  scala_xml_dtd_ContentModelParser$: 1,
  scala_xml_dtd_Scanner: 1,
  scala_xml_parsing_TokenTests: 1,
  scala_xml_dtd_Tokens: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModelParser$.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModelParser$;
ScalaJS.moduleInstances.scala_xml_dtd_ContentModelParser = undefined;
ScalaJS.modules.scala_xml_dtd_ContentModelParser = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_ContentModelParser)) {
    ScalaJS.moduleInstances.scala_xml_dtd_ContentModelParser = new ScalaJS.c.scala_xml_dtd_ContentModelParser$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_ContentModelParser
});
//@ sourceMappingURL=ContentModelParser$.js.map

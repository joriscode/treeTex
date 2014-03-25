/** @constructor */
ScalaJS.c.scala_xml_include_sax_Main$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.namespacePrefixes$1 = null;
  this.scala$xml$include$sax$Main$$lexicalHandler$1 = null
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_include_sax_Main$.prototype.constructor = ScalaJS.c.scala_xml_include_sax_Main$;
ScalaJS.c.scala_xml_include_sax_Main$.prototype.namespacePrefixes__p1__T = (function() {
  return this.namespacePrefixes$1
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$lexicalHandler__T = (function() {
  return this.scala$xml$include$sax$Main$$lexicalHandler$1
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.main__AT__V = (function(args) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var parser = ScalaJS.as.org_xml_sax_XMLReader(this.scala$xml$include$sax$Main$$saxe$1__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
      return (function() {
        return ScalaJS.modules.org_xml_sax_helpers_XMLReaderFactory().createXMLReader__Lorg_xml_sax_XMLReader()
      })
    })())).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_xml_include_sax_Main$$anonfun$2().init___O(nonLocalReturnKey1)));
    try {
      parser.setFeature__T__Z__V(this.namespacePrefixes__p1__T(), true)
    } catch ($jsexc$) {
      if (ScalaJS.is.org_xml_sax_SAXException($jsexc$)) {
        var e = $jsexc$;
        return ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream().println__O__V(e)
      } else {
        throw $jsexc$
      }
    };
    if (ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(args, 1)).isEmpty__Z()) {
      return undefined
    };
    if (this.dashR$1__p1__AT__Z(args)) {
      var args2 = ScalaJS.asArrayOf.java_lang_String(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(args, 1)).drop__I__O(2), 1)
    } else {
      var args2 = args
    };
    if (this.dashR$1__p1__AT__Z(args)) {
      var resolver = ScalaJS.modules.scala_None()
    } else {
      var resolver = ScalaJS.modules.scala_util_control_Exception().catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Class.getArrayOf(), [ScalaJS.data.java_lang_Exception.getClassOf()]), 1))).opt__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(args$1, parser$1) {
        return (function() {
          var r = ScalaJS.as.org_xml_sax_EntityResolver(ScalaJS.modules.java_lang_Class().forName__T__Ljava_lang_Class(args$1.underlying[1]).newInstance__O());
          parser$1.setEntityResolver__Lorg_xml_sax_EntityResolver__V(r);
          return r
        })
      })(args, parser))).orElse__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(nonLocalReturnKey1$1) {
        return (function() {
          var jsx$4 = new ScalaJS.c.scala_runtime_NonLocalReturnControl$mcV$sp();
          var jsx$3 = nonLocalReturnKey1$1;
          ScalaJS.modules.scala_xml_include_sax_Main().scala$xml$include$sax$Main$$fail$1__T__V("Could not load requested EntityResolver");
          var jsx$2 = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          var jsx$1 = jsx$4.init___O__Lscala_runtime_BoxedUnit(jsx$3, jsx$2);
          throw jsx$1
        })
      })(nonLocalReturnKey1)))
    };
    ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(args2, 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(parser$1, resolver$1) {
      return (function(arg) {
        try {
          var includer = new ScalaJS.c.scala_xml_include_sax_XIncludeFilter().init___();
          includer.setParent__Lorg_xml_sax_XMLReader__V(parser$1);
          var s = new ScalaJS.c.scala_xml_include_sax_XIncluder().init___Ljava_io_OutputStream__T(ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream(), "UTF-8");
          includer.setContentHandler__Lorg_xml_sax_ContentHandler__V(s);
          resolver$1.map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_xml_include_sax_Main$$anonfun$main$1$$anonfun$apply$4().init___Lscala_xml_include_sax_Main$$anonfun$main$1__Lscala_xml_include_sax_XIncludeFilter(this, includer));
          ScalaJS.modules.scala_util_control_Exception().ignoring__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Class.getArrayOf(), [ScalaJS.data.org_xml_sax_SAXException.getClassOf()]), 1))).apply__Lscala_Function0__O(new ScalaJS.c.scala_xml_include_sax_Main$$anonfun$main$1$$anonfun$apply$1().init___Lscala_xml_include_sax_Main$$anonfun$main$1__Lscala_xml_include_sax_XIncludeFilter__Lscala_xml_include_sax_XIncluder(this, includer, s));
          includer.parse__T__V(arg)
        } catch ($jsexc$) {
          if (ScalaJS.is.org_xml_sax_SAXParseException($jsexc$)) {
            var e$2 = $jsexc$;
            ScalaJS.modules.scala_xml_include_sax_Main().scala$xml$include$sax$Main$$fail$1__T__V(e$2.toString__T());
            ScalaJS.modules.scala_xml_include_sax_Main().scala$xml$include$sax$Main$$fail$1__T__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("Problem in %s at line %d")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [e$2.getSystemId__T(), ScalaJS.bI(e$2.getLineNumber__I())]))))
          } else {
            if (ScalaJS.is.org_xml_sax_SAXException($jsexc$)) {
              var e = $jsexc$;
              ScalaJS.modules.scala_xml_include_sax_Main().scala$xml$include$sax$Main$$fail$1__T__V(e.toString__T())
            } else {
              throw $jsexc$
            }
          }
        };
        return ScalaJS.bV(undefined)
      })
    })(parser, resolver)))
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        ex.value$mcV$sp__V()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$saxe$1__Lscala_Function0__Lscala_Option = (function(body) {
  return ScalaJS.modules.scala_util_control_Exception().catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Class.getArrayOf(), [ScalaJS.data.org_xml_sax_SAXException.getClassOf()]), 1))).opt__Lscala_Function0__Lscala_Option(body)
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$fail$1__T__V = (function(msg) {
  ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream().println__T__V(msg)
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.dashR$1__p1__AT__Z = (function(args$1) {
  return ((ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(args$1, 1)).size__I() >= 2) && ScalaJS.anyRefEqEq(args$1.underlying[0], "-r"))
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_include_sax_Main = this;
  this.namespacePrefixes$1 = "http://xml.org/sax/features/namespace-prefixes";
  this.scala$xml$include$sax$Main$$lexicalHandler$1 = "http://xml.org/sax/properties/lexical-handler";
  return this
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$fail$1__T__ = (function(msg) {
  return ScalaJS.bV(this.scala$xml$include$sax$Main$$fail$1__T__V(msg))
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$saxe$1__Lscala_Function0__ = (function(body) {
  return this.scala$xml$include$sax$Main$$saxe$1__Lscala_Function0__Lscala_Option(body)
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.main__AT__ = (function(args) {
  return ScalaJS.bV(this.main__AT__V(args))
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.scala$xml$include$sax$Main$$lexicalHandler__ = (function() {
  return this.scala$xml$include$sax$Main$$lexicalHandler__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_sax_Main$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_sax_Main$.prototype = ScalaJS.c.scala_xml_include_sax_Main$.prototype;
ScalaJS.is.scala_xml_include_sax_Main$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_sax_Main$)))
});
ScalaJS.as.scala_xml_include_sax_Main$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_sax_Main$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.sax.Main")
  }
});
ScalaJS.isArrayOf.scala_xml_include_sax_Main$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_sax_Main$)))
});
ScalaJS.asArrayOf.scala_xml_include_sax_Main$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_sax_Main$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.sax.Main;", depth)
  }
});
ScalaJS.data.scala_xml_include_sax_Main$ = new ScalaJS.ClassTypeData({
  scala_xml_include_sax_Main$: 0
}, false, "scala.xml.include.sax.Main$", ScalaJS.data.java_lang_Object, {
  scala_xml_include_sax_Main$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_sax_Main$.prototype.$classData = ScalaJS.data.scala_xml_include_sax_Main$;
ScalaJS.moduleInstances.scala_xml_include_sax_Main = undefined;
ScalaJS.modules.scala_xml_include_sax_Main = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_include_sax_Main)) {
    ScalaJS.moduleInstances.scala_xml_include_sax_Main = new ScalaJS.c.scala_xml_include_sax_Main$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_include_sax_Main
});
//@ sourceMappingURL=Main$.js.map
